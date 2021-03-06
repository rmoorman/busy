import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import donors from '../helpers/donors';
import Header from '../app/Header';
import Avatar from '../widgets/Avatar';
import Donor from '../widgets/Donor';

const Donors = () =>
  <div className="main-panel">
    <Header />
    <div className="container container-small my-5">
      <h1 className="text-center">
        <FormattedMessage id="donors" />
      </h1>
      <ul>
        { Object.keys(donors).map(donor =>
          <h3>
            <Link to={`/@${donor}`}>
              <Avatar username={donor} sm /> @{donor}
            </Link>
            { ' ' }
            <Donor rank={donors[donor]} />
          </h3>
        )}
      </ul>
    </div>
  </div>;

export default Donors;
