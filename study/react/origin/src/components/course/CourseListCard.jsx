import Card from "../Card";
import CourseItem from "./CourseItem";

export default function CourseListCard({ title, items }) {
    return (
        <>
            <Card title={title}>
                {/* children props - start */}
                <div className="courses">
                    {items.map(item => <CourseItem key={item.id} {...item} />)}
                </div>
                {/* children props - end */}
            </Card>
        </>
    );
}