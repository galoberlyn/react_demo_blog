import db from '../models/index';
import { SubmissionModel } from '../types/SubmissionTypes';

const { submissions: Submissions } = db;

export default {

  getAll: async () => {

    return await Submissions.findAll();
  },

  bulkStore: async (data: SubmissionModel[]) => {

    return await Submissions.bulkCreate(data);
  }
}