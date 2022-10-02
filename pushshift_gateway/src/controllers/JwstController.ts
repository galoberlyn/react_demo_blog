import express from 'express';
import { HTTP_STATUS } from '../utils/constants';
import { messages, responseTemplate } from '../utils/common';
import JwstService from '../services/JwstService';

export default {

  find: async (req: express.Request, res: express.Response) => {
    try {
      const result = await JwstService.find();
      res.status(result.code).send(responseTemplate(
        messages(result.type, 'jwst data'),
        result.data,
      ))
    } catch (e) {
      res.status(HTTP_STATUS.serverError).send(responseTemplate(
        JSON.stringify(e.message),
        null
      ));
    }
  },

  sync: async (req: express.Request, res: express.Response) => {
    try {
      const result = await JwstService.sync(req);
      res.status(result.code).send(responseTemplate(
        messages(result.type, 'jwst data'),
        result.data,
      ))
    } catch (e) {
      res.status(HTTP_STATUS.serverError).send(responseTemplate(
        JSON.stringify(e.message),
        null
      ));
    }
  }
  
}
