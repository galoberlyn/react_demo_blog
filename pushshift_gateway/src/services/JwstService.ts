import express from 'express';
import axios from 'axios';
import JwstRepository from '../repositories/JwstRepository';
import { REDDIT_URL } from '../utils/constants';
import { JwstDataTransformer } from '../utils/transformers';

export default {

  find: async () => {
    const submissions = await JwstRepository.getAll();

    return {
      code: 200,
      type: 'OK',
      data: submissions,
    }
  },

  sync: async (req: express.Request) => {
    const submissions = await JwstRepository.getAll();

    console.log(submissions.length)

    if (!submissions.length) {
      const { data: { data } }= await axios.get(REDDIT_URL);
      const stored = await JwstRepository.bulkStore(JwstDataTransformer(data));

      return {
        code: 200,
        type: 'OK',
        data: stored,
      }
    }

    return {
      code: 200,
      type: 'Already synced!',
      data: null,
    }
  }

  
}