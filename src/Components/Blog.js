import { Col, Row } from "antd"

import bg from '../images/logo.jpeg'
const Blog=()=>{
    return(
        <>
        <Row style={{marginTop:"50px"}}>
            <Col span={24}>
                <img src={bg} alt="logo" height={150} width={180} />
            </Col>
        </Row>
        <Row style={{marginTop:"30px"}}>

            <Col span={24}>
              
            <div className='b1'>
    <a target="_blank" href="https://www.instagram.com/shreeriddhibridalcollection/?utm_medium=copy_link" class="btn red block">Instagram</a>
    </div>
    <div className='b1'>
    <a target="_blank" href="https://www.facebook.com/mahesh.suba.1" class="btn sky block">FaceBook</a>
    
    </div>
                </Col>
        </Row>
        <Row style={{marginTop:"30px",textAlign:"left",marginLeft:"30px"}}>
            <Col span={24}>
                    
                    {/* <span className="label">Mahesh Thakkar</span> */}
                    <span className="label">Contact Details</span>
                </Col>

                <Col span={24}>
                    
                    {/* <span className="label">Mahesh Thakkar</span> */}
                    <span style={{color:"white",fontSize:"22px"}}>Mahesh Thakkar: 9825352053</span>
                </Col>

                <Col span={24}>
                    
                    {/* <span className="label">Mahesh Thakkar</span> */}
                    <span style={{color:"white",fontSize:"22px"}}>Mittal Thakkar: 9510774544</span>
                </Col>
                
        </Row>
        <Row style={{marginTop:"20px",textAlign:"left",marginLeft:"30px"}}>
        <Col span={24} style={{color:"white",fontSize:"22px"}}>
                    
                    {/* <span className="label">Mahesh Thakkar</span> */}
                    <span className="label">Address</span>
                    <br />
                    <span>213, Yashnidhi Appartment, 29, Saraswati society, Paldi, Ahmedabad-380007</span>
                </Col>
        </Row>
    
    </>
    )
}
export default Blog