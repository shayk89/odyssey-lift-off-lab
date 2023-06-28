import { RESTDataSource } from '@apollo/datasource-rest';

export class TrackAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }
  
  getModule(moduleId: string) {
    return this.get(`module/${moduleId}`);
  }
}