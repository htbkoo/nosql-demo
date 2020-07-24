import { getDoctorWithIdEqualsToDr2, getDoctorWithNameEqualsToDoctor3 } from "./systemDesignPractice";

describe("System Design interview blog system", function () {
    describe("doctors", () => {
        it("should get the doc for doctor with docId=dr2", async () => {
            // given
            // when
            const docs = await getDoctorWithIdEqualsToDr2();

            // then
            expect(docs).toMatchObject({
                _id: "dr2",
                name: "doctor2",
            });
        });

        it("should get the doc for doctor with name=doctor3", async () => {
            // given
            // when
            const docs = await getDoctorWithNameEqualsToDoctor3();

            // then
            expect(docs).toMatchObject({
                _id: "dr3",
                name: "doctor3",
            });
        });
    });

    describe("comments", () => {
    });
})
