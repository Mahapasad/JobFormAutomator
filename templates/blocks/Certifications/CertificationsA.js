
export default function CertificationsA() {
  const { certificates } = useCertificateStore();
  return (
    <div>
      <h1>Certificates</h1>
      <div className="grid gap-4">
        {certificates.map((certificate) => (
          <div key={certificate.id}>
            <h3>{certificate.name}</h3>
            <p>{certificate.details}</p>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

