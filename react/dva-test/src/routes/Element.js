import React from 'react';
import { connect } from 'dva';
import { Button, Radio, Icon, Row, Col } from 'antd';
import styles from './IndexPage.css';

const Element = () => {
  return (
    <div className={styles.buttonMargin}>
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>

      <div>
        <Button type="primary" shape="circle" icon="search" />
        <Button type="primary" icon="search">Search</Button>
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <br />
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <Button type="dashed" shape="circle" icon="search" />
        <Button type="dashed" icon="search">Search</Button>
      </div>

      <div>
        <Radio.Group value="large" >
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <Button type="primary" shape="circle" icon="download" size="large" />
        <Button type="primary" icon="download" size="large">Download</Button>
        <Button type="primary" size="large">Normal</Button>
        <br />
        <Button.Group size="large">
          <Button type="primary">
            <Icon type="left" />Backward
          </Button>
          <Button type="primary">
            Forward<Icon type="right" />
          </Button>
        </Button.Group>
      </div>

      <div>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary(disabled)</Button>
        <br />
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
        <br />
        <Button>Ghost</Button>
        <Button disabled>Ghost(disabled)</Button>
        <br />
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>Dashed(disabled)</Button>
      </div>

      {/* 栅格都是以24为总宽度进行划分 */}
      <div>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </div>
    </div>
  );
};

Element.propTypes = {};

export default connect()(Element);
