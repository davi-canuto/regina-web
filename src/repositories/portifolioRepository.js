import dbConnect from "../lib/dbConnect";
import Portfiolio from "../models/portifolio";
import crypto from "crypto";

export default class PortifolioRepository {
  static async create(data) {
    try {
      await dbConnect();

      const secret = crypto.randomBytes(32).toString("hex");
      data.userSecret = secret;

      const record = new Portfiolio(data);

      return await record.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async findAll() {}

  static async findById(id) {}

  static async update(id, data) {}

  static async delete(id) {}
}
