import {
    getAllCommentsPlacedByDr1, getAllCommentsPlacedOnOrBefore2020Feb29,
    getAllDoctorsInDB,
    getDoctorWithIdEqualsToDr2,
    getDoctorWithNameEqualsToDoctor3
} from "./systemDesignExercise";
import { DateTime } from "luxon";

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
                docs: [
                    {
                        _id: "dr3",
                        name: "doctor3",
                    }
                ]
            });
        });

        it("should get the docs for all doctors", async () => {
            // given
            // when
            const docs = await getAllDoctorsInDB();

            // then
            expect(docs).toMatchObject({
                "offset": 0,
                "rows": [
                    {
                        "id": "dr1",
                        "key": "dr1",
                        "doc": {
                            "name": "doctor1",
                            "_id": "dr1",
                        }
                    },
                    {
                        "id": "dr2",
                        "key": "dr2",
                        "doc": {
                            "name": "doctor2",
                            "_id": "dr2",
                        }
                    },
                    {
                        "id": "dr3",
                        "key": "dr3",
                        "doc": {
                            "name": "doctor3",
                            "_id": "dr3",
                        }
                    },
                    {
                        "id": "dr4",
                        "key": "dr4",
                        "doc": {
                            "name": "doctor4",
                            "_id": "dr4",
                            "profilePic": "only this doctor has profile pic, haha",
                        }
                    }
                ],
                "total_rows": 4
            });
        });
    });

    describe("comments", () => {
        it("should get all the comments placed by doctor with docId=dr1", async () => {
            // given
            // when
            const docs = await getAllCommentsPlacedByDr1();

            // then
            expect(docs).toMatchObject({
                docs: [

                    {
                        _id: "comment1",
                        text: "member1 is sick",
                        timestamp: "2020-01-01T00:00:00.000Z",
                        placedBy: "dr1",
                    },
                    {
                        _id: "comment3",
                        text: "no, member1 is sick, stop arguing about that",
                        timestamp: "2020-02-05T00:00:00.000Z",
                        placedBy: "dr1",
                    },
                ]
            });
        });

        it("should get all the comments placed on or before 2020-Feb-209", async () => {
            // given
            // when
            const docs = await getAllCommentsPlacedOnOrBefore2020Feb29();

            // then
            expect(docs).toMatchObject([

            ]);
        });
    });
})
