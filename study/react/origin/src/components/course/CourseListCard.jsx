import { Fragment } from "react";
import Card from "../Card";
import CourseItem from "./CourseItem";

export default function CourseListCard({ title, items }) {

    const lastIndex = items.length - 1;

    return (
        <>
            <Card title={title}>
                {/* children props - start */}
                <div className="courses">
                    {items.map((item, index)=> (
                        <Fragment key={item.id}>
                            <CourseItem  {...item} />
                        { lastIndex !== index && <hr className="divider"/> }
                        </Fragment>
                    ))}
                </div>
                {/* children props - end */}
            </Card>
        </>
    );
}