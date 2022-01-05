import { rest } from 'msw'

export const handlers = [
    rest.get('/members', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(['An', 'Phat', 'Tam']),
        )
    }),
]