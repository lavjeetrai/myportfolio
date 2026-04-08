import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#09090b',
    color: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #27272a'
  }}>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#3b82f6' }}>
      New Message from Portfolio
    </h1>
    <div style={{ marginBottom: '24px' }}>
      <p style={{ margin: '4px 0', fontSize: '14px', color: '#a1a1aa' }}>Name</p>
      <p style={{ margin: '0', fontSize: '16px', fontWeight: '500' }}>{name}</p>
    </div>
    <div style={{ marginBottom: '24px' }}>
      <p style={{ margin: '4px 0', fontSize: '14px', color: '#a1a1aa' }}>Email</p>
      <p style={{ margin: '0', fontSize: '16px', fontWeight: '500' }}>{email}</p>
    </div>
    <div style={{ marginBottom: '24px' }}>
      <p style={{ margin: '4px 0', fontSize: '14px', color: '#a1a1aa' }}>Message</p>
      <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', backgroundColor: '#18181b', padding: '16px', borderRadius: '8px' }}>
        {message}
      </p>
    </div>
    <hr style={{ border: '0', borderTop: '1px solid #27272a', margin: '32px 0' }} />
    <p style={{ fontSize: '12px', color: '#71717a', textAlign: 'center' }}>
      Sent from your portfolio contact form.
    </p>
  </div>
);
