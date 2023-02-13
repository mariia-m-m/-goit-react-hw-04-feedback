import { nanoid } from 'nanoid'

const items = [
    {
        id: nanoid(3),
        title: 'Home',
        link: "/"
    },
        {
        id: nanoid(3),
        title: 'Movies',
        link:"/movies"
    },
                {
        id: nanoid(3),
        title: 'MovieDetails',
        link:"/movies/:movieId"
    },
                     {
        id: nanoid(3),
        title: 'Cast',
        link:"/movies/:movieId/cast"
    },     
                        {
        id: nanoid(3),
        title: 'Reviews',
        link:"/movies/:movieId/reviews"
    },                   
]

export default items