import { dbDoctors } from "./systemDesignPractice";

describe("System Design interview blog system", function () {
    describe("doctors", () => {
        it("should get existing doctor information", async () => {
            // given
            // when
            const docs = await dbDoctors.get("doctors");

            // then
            expect(docs).toEqual([]);
        });
    });
})
