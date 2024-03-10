export default function loadBalancer(chinaDownload, USDownload) {
  const p1 = chinaDownload;
  const p2 = USDownload;

  return Promise.race([p1, p2]);
}
