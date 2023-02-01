import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import "./Store.css"
export function Store() {
  return (
    <>
    <div className="justify-content-center align-items-center d-flex">
    <img style={{ height: '400px', width: 'auto' }} srcSet="/imgs/storebanner.jpg" alt="Store Banner" />
    </div>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
