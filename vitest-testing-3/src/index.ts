
import express from "express";
import { z } from "zod";
import { prismaClient } from './db'
import { vi } from "vitest";
// const prisma = new PrismaClient()

export const app = express();
app.use(express.json());

vi.mock('../db', () => ({
    prismaClient: {
        user: {
            create: vi.fn()
        }
    }
}))

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    

    res.json({
        answer
    })
});

app.get("/sum", async(req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    // await prismaClient.user.creates({
    //     data: {
    //         name: "John Doe",
    //         email: "",
    //     }
    //     })   
});