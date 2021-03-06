import { connect } from 'react-redux';
import { Link } from 'react-router';
import React from 'react';
import _ from 'lodash';

import Header from '../../app/Header';
import Icon from '../../widgets/Icon';
import { deleteDraft } from './EditorActions';

let DraftRow = (props) => {
  const { id, data } = props;
  let { title = '', body = '' } = data;
  title = title.trim();
  body = body.replace(/\r?\n|\r|[\u200B-\u200D\uFEFF]/g, ' ').substring(0, 50);
  let draftTitle = title.length ? title : body;
  draftTitle = draftTitle.trim();
  if (draftTitle.length === 0) {
    draftTitle = 'Untitled Draft';
  }
  return (<h3>
    <Link to={{ pathname: '/write', query: { draft: id } }}>{draftTitle}</Link>
    <a onClick={() => { props.deleteDraft(id); }}><Icon name="cancel" /></a>
  </h3>);
};

DraftRow = connect(() => ({}), { deleteDraft })(DraftRow);

const DraftList = ({ editor: { draftPosts } }) =>
  <div className="main-panel">
    <Header />
    <div className="my-5 container container-small">
      <h1 className="text-center">Drafts</h1>
      { _.size(draftPosts) === 0 &&
        <h3 className="text-center">
          You don't have any draft saved.
        </h3>
      }
      { _.map(draftPosts, (draft, key) =>
        <DraftRow key={key} data={draft.postData} id={key} />)
      }
    </div>
  </div>;

export default connect(state => ({ editor: state.editor }))(DraftList);
