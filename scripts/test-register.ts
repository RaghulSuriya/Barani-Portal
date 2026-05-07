import { prisma } from "../src/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
    const email = "test@example.com";
    const password = "password123";

    // 1. Clean up
    await prisma.user.deleteMany({ where: { email } });

    // 2. Register
    console.log("Registering user:", email);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name: "Test User",
            email,
            password: hashedPassword,
            phone: "1234567890",
            role: "CUSTOMER",
            status: "PENDING",
        },
    });
    console.log("User created:", user.id);

    // 3. Verify in DB
    const foundUser = await prisma.user.findUnique({ where: { email } });
    if (!foundUser) {
        console.error("User NOT found in DB after creation!");
    } else {
        console.log("User found in DB:", foundUser.email);
    }

    // 4. Simulate Login
    if (foundUser) {
        const isPasswordValid = await bcrypt.compare(password, foundUser.password);
        console.log("Password valid:", isPasswordValid);

        if (foundUser.status !== "ACTIVE" && foundUser.role !== "MANAGER") {
            console.log("User status is:", foundUser.status);
            console.log("Login logic in auth.ts (commented out checks) might be irrelevant or relevant.");
        }
    }

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
