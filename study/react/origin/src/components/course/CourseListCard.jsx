import Card from "../Card";
import CourseItem from "./CourseItem";

export default function CourseListCard({items}) {
    const [course1, course2, course3] = items;

    return (
        <>
            <Card title="강의 목록">
                {/* children props - start */}
                <div className="courses">
                    <CourseItem {...course1}/>
                    <CourseItem {...course2}/>
                    <CourseItem {...course3}/>
                </div>
                {/* children props - end */}
            </Card>
        </>
    );
}