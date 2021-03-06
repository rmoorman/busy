import React from 'react';
import { FormattedRelative } from 'react-intl';

import Avatar from '../widgets/Avatar';

function Message(props) {
  const { model } = props;
  const sentAt = model[0].sentAt;
  const senderUsername = (model[0].senderUsername || model[0].sentBy);

  return (
    <li className="Message message">
      <div className="media" data-uuid={model[0].uuid}>
        <div className="container">
          <div className="media-left">
            <Avatar md username={senderUsername} />
          </div>
          <div className="media-body">
            <div className="media-heading">
              <b>@{senderUsername}</b>
              <span
                style={{
                  textTransform: 'uppercase',
                  paddingLeft: '10px',
                  color: '#ccc',
                  backgroundColor: 'transparent'
                }}
              >
                <FormattedRelative value={sentAt} />
              </span>
            </div>
            <p>
              {model[0].text}
            </p>
          </div>
        </div>
      </div>

      {
        model.slice(1).map(({ uuid, text }, i) => (
          <div className="media" key={i} data-uuid={uuid}>
            <div className="container">
              <div className="media-left">
                <div
                  className="Message__timestamp"
                  style={{
                    width: '50px',
                    textTransform: 'uppercase',
                    color: '#ccc'
                  }}
                >
                  <FormattedRelative value={sentAt} />
                </div>
              </div>
              <div className="media-body">
                <p>{text}</p>
              </div>
            </div>
          </div>
        ))
      }
    </li>
  );
}

export default Message;
