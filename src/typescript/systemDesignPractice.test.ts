import { getDoctorWithIdEqualsToDr2 } from "./systemDesignPractice";

describe("System Design interview blog system", function () {
    describe("doctors", () => {
        it("should get existing doctor information", async () => {
            // given
            // when
            const docs = await getDoctorWithIdEqualsToDr2();

            // then
            expect(docs).toEqual([]);
        });
    });

    describe("comments", () => {
    });
})
