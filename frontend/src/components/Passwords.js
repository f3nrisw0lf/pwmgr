import React from 'react';
import Password from './Password';

const Passwords = (props) => {
  const { passwords, filter } = props;

  return (
    <div>
      {passwords[0] ? (
        passwords
          .filter((password) => {
            const isFilterInName = password.name
              .toLowerCase()
              .includes(filter.toLowerCase());

            const isFilterInUsername = password.username
              .toLowerCase()
              .includes(filter.toLowerCase());

            const isFilterInUrls = password.urls.filter((url) => {
              try {
                const temp = new URL(url);
                return temp.host.toLowerCase().includes(filter.toLowerCase());
              } catch {
                return false;
              }
            });

            if (isFilterInName || isFilterInUsername || isFilterInUrls.length) {
              return password;
            }
          })
          .map((password) => {
            if (password._id)
              return <Password key={password._id} password={password} />;
          })
      ) : (
        <h3 className="ms-3 mb-2">No Password Yet...</h3>
      )}
    </div>
  );
};

export default Passwords;
