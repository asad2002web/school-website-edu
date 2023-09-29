import { demoParson } from "./../../assets/index";

function TeacherCard() {
    return (
        <div className="teacher-card shadow">
            <img src={demoParson} alt="Our TEachers" />
            <h3>নামঃ মোঃ আব্দুর রহমান</h3>
            <p><strong>পদবিঃ</strong> সহকারি প্রধান শিক্ষক (পিআরএল)</p>
            <p><strong>ইনডেক্স নাম্বারঃ </strong> ১৩২৯৪৯</p>
            <p><strong>মোবাইলঃ </strong> ০১৭১২৪৪৪৮৭৫</p>
        </div>
    )
}
const Teachers = () => {
    return (
        <section className="section-gap">
            <div className="our-teachers">
                <div className="heading">
                    <h1 className="title"><span>শিক্ষকমন্ডলী</span></h1>
                </div>
                <div className="teachers-cards flex">
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                </div>
            </div>
        </section>
    )
}

export default Teachers