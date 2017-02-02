import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from 'config';
import styles from './index.scss';
import { ButtonGroup } from 'components';

export default class HomePage extends Component {
  render() {
    return (
      <div className={styles.homepage}>
        <Helmet {...config.meta.head} />
        <div>
          <ButtonGroup
            options={[
              {
                name: 'option_1',
                label: 'option 1'
              },
              {
                name: 'option_2',
                label: 'option 2'
              },
              {
                name: 'option_3',
                label: 'option 3'
              }
            ]}
            name="group_1"
            label="Group 1: implyAll and implyNone"
            multiple={true}
            implyAll={true}
            implyNone={true}
            onChange={console.log}
          />
          <hr />
          <ButtonGroup
            options={[
              {
                name: 'option_1',
                label: 'option 1'
              },
              {
                name: 'option_2',
                label: 'option 2'
              },
              {
                name: 'option_3',
                label: 'option 3'
              }
            ]}
            name="group_2"
            label="Group 2: controlled checkboxes"
            multiple={true}
            value={{
              option_1: true,
              option_2: false,
              option_3: true
            }}
            onChange={console.log}
          />
          <hr />
          <ButtonGroup
            options={[
              {
                value: 'option_1',
                label: 'option 1'
              },
              {
                value: 'option_2',
                label: 'option 2'
              },
              {
                value: 'option_3',
                label: 'option 3'
              }
            ]}
            name="group_3"
            label="Group 3: controlled radios"
            value="option_2"
            multiple={false}
            onChange={console.log}
          />
          <hr />
          <ButtonGroup
            options={[
              {
                value: 'option_1',
                label: 'option 1'
              },
              {
                value: 'option_2',
                label: 'option 2'
              },
              {
                value: 'option_3',
                label: 'option 3'
              }
            ]}
            name="group_4"
            label="Group 3: radios"
            multiple={false}
            onChange={console.log}
          />
        </div>
      </div>
    );
  }
}
