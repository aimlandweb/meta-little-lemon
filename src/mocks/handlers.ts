import { rest } from 'msw';

export const handlers = [
	rest.get('http://localhost:5500/api/fetchAPI', (req, res, ctx) => {
		return res(ctx.status(200));
		ctx.json([
			{
				id: '342d775fd22dfd528df67f518238e0c8',
				date: '2023-07-20',
				time: '17:00',
				noOfGuests: 1,
				occasion: 'Birthday',
			},
			{
				id: '95cc627ebad63a40cf184458da0f8057',
				date: '2023-07-20',
				time: '18:00',
				noOfGuests: 1,
				occasion: 'Birthday',
			},
			{
				id: '3f73fc12a7892351d9914f7603880888',
				date: '2023-07-20',
				time: '19:00',
				noOfGuests: 1,
				occasion: 'Birthday',
			},
		]);
	}),
  rest.post('http://localhost:5500/api/fetchAPI',(req, res, ctx) => {
    return res(ctx.status(200));
    ctx.json()
  })
];
