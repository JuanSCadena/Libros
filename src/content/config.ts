import { defineCollection,z } from "astro:content";

const books= defineCollection({

schema:z.object({

titulo:z.string(),
autor:z.string(),
img:z.string(),
readtime:z.number(),
descripcion:z.string().url(),
buy:z.object({
    españa:z.string(),
    usa:z.string(),
}),

})


})

export const collections={books}