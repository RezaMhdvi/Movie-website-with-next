import { Card } from "antd";
import React from "react";


const FilmContent = ({filmName}) => {
    return (
        <div>
            <Card
            cover={<img height="200px" src={`/assets/films/${filmName}.jpg`} />}
            >
                <Card.Meta 
                title={<h2 className="text-center">{filmName}</h2>} 
                description={<p style={{textAlign:"right"}} className="text-right">این فیلم مربوط به سایت تاپ فیلم است</p>}/>
            </Card>
        </div>
    );
}

export default FilmContent;

