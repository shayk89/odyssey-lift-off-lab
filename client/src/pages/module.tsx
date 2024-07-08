import { gql, useQuery } from "@apollo/client";
import { Layout, ModuleDetail, QueryResult } from "../components"
import { useParams } from "react-router-dom";

const MODULE_QUERY = gql`
query GetTrackModule($moduleId: ID!, $trackId: ID!) {
  module(id: $moduleId) {
    id
    title
    videoUrl
    content
  }
  track(id: $trackId) {
    title
    id
    modules {
      title
      length
      id
    }
  }
}
`;

const Module =  () => {
    const {trackId ="", moduleId = ""} = useParams();
    const {error, loading, data} = useQuery(MODULE_QUERY,{
        variables:{trackId, moduleId}
    });
    return (<Layout fullWidth={true}>
        <QueryResult error={error} loading={loading} data={data}>
            <ModuleDetail track={data?.track} module={data?.module}/>
        </QueryResult>
    </Layout>)
}
export default Module;