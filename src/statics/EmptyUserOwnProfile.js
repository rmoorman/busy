import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

const EmptyUserProfile = () =>
  <div className="text-center">
    <h3>
      <FormattedMessage id="empty_user_own_profile" />
      <Link to="/write">Start now</Link>
    </h3>
  </div>;

export default EmptyUserProfile;
