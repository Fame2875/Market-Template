import { Col, Container, Row } from "react-bootstrap";
import {Stores} from '../components/Stores'
import { useParams } from "react-router-dom";
import {Restaurant} from '../Types/types'
import { useEffect, useState } from "react";
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import stores from "../data/stores.json"
export function Home() {
  return <>
  <div className="justify-content-center align-items-center d-flex">
    <img style={{ height: '400px', width: 'auto' }} srcSet="/imgs/homebanner.jpg" alt="Store Banner" />
    </div>
  <h1 className="mt-3">เลือกร้านอาหารที่คุณชอบ</h1>
  <Row md={2} xs={1} lg={3} className="g-3">
        {stores.map(item => (
          <Col key={item.id}>
            <Stores restaurant={item} />
          </Col>
        ))}
  </Row>
</>
}
