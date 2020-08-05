import { Request, Response, response } from 'express';
import db from '../database/connection';
export default class ConnectionController {
	async index(req: Request, res: Response) {
		const [ totalConnections, _ ] = await db('connections').count('* as total');

		return res.json(totalConnections);
	}
	async create(req: Request, res: Response) {
		const { user_id } = req.body;

		try {
			await db('connections').insert({
				user_id
			});
			return res.status(201).send();
		} catch (error) {
			return res.status(400).json({ error: 'Unespected Error while connecting.' });
		}
	}
}
