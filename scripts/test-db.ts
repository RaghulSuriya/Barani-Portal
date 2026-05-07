import { prisma } from "../src/lib/prisma";

async function main() {
    try {
        console.log("Attempting to query DB...");
        const userCount = await prisma.user.count();
        console.log("User count:", userCount);
    } catch (e) {
        console.error("DB Query failed:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
