import React from 'react';

export default function Contact({ clase, body, bodyhref }) { // Capitalized 'Contact' for consistency
  return (
    <div className='flex gap-4 items-center'>
      <i className={clase}></i>
      <p className={`text-2xl`}>  {/* Dynamic class based on 'clase' prop */}
        {body}
      </p>
      <a href="mailto:ctp.santodomingo@mep.go.cr" className={`text-2xl`}> {/* Dynamic class based on 'clase' prop */}
        {bodyhref}
      </a>
    </div>
  );
}