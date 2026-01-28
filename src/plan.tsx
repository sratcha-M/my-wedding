import React from "react";

// Google Fonts import for Sriracha and Sarabun
const fontLink = (
  <link
    href="https://fonts.googleapis.com/css2?family=Sriracha&family=Sarabun:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
);

const style = `
.zones-row {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    width: 100vw;
    max-width: 1400px;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 2.5rem;
    z-index: 2;
  }
  @media (max-width: 1200px) {
    .zones-row {
      gap: 1.2rem;
      max-width: 100vw;
    }
    .zone-section {
      max-width: 340px;
    }
  }
  @media (max-width: 900px) {
    .zones-row {
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
    }
    .zone-section {
      max-width: 98vw;
      width: 98vw;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --primary: #827c66;
    --secondary: #bad29e;
    --accent: #f5c5b5;
    --light: #e8f0df;
    --dark: #1A1A1A;
  }
  html, body, #root {
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(120deg, #f0f0f0 60%, #e8f0df 100%);
  }
  body {
    font-family: 'Sarabun', sans-serif;
    color: var(--dark);
    min-height: 100vh;
    height: 100%;
    width: 100vw;
    overflow-x: hidden;
  }
  .page {
    min-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    background: white;
    box-shadow: 0 0 32px 0 rgba(130,124,102,0.10);
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 0 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0 0 32px 32px;
    z-index: 1;
  }
  .page::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 15% 20%, rgba(130, 124, 102, 0.04) 0%, transparent 40%),
      radial-gradient(circle at 85% 80%, rgba(186, 210, 158, 0.08) 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
  }
  .header {
    text-align: center;
    margin-bottom: 2.5rem;
    position: relative;
    z-index: 2;
    padding: 2.5rem 0 1.5rem 0;
    background: linear-gradient(135deg, var(--primary), #9a9482 80%);
    width: 100vw;
    border-radius: 0 0 32px 32px;
    box-shadow: 0 4px 24px 0 rgba(130,124,102,0.10);
  }
  .header h1 {
    font-family: 'Sriracha', cursive;
    font-size: 2.8rem;
    color: white;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.18);
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }
  .header p {
    font-size: 1.25rem;
    color: var(--accent);
    font-weight: 400;
    letter-spacing: 0.5px;
  }
  .zone-section {
    margin-bottom: 2.5rem;
    width: 100%;
    max-width: 700px;
    page-break-inside: avoid;
    z-index: 2;
  }
  .zone-header {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 1.2rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid var(--primary);
  }
  .zone-number {
    font-family: 'Sriracha', cursive;
    font-size: 2.2rem;
    color: white;
    background: linear-gradient(135deg, var(--primary), #9a9482);
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(130, 124, 102, 0.18);
    flex-shrink: 0;
  }
  .zone-title {
    font-family: 'Sriracha', cursive;
    font-size: 1.7rem;
    color: var(--primary);
    letter-spacing: 0.5px;
  }
  .places-compact {
    display: grid;
    gap: 1.1rem;
  }
  .place-item {
    background: linear-gradient(135deg, rgba(186, 210, 158, 0.18), rgba(232, 240, 223, 0.32));
    border-radius: 16px;
    padding: 1.1rem 1.2rem;
    border-left: 5px solid var(--accent);
    transition: all 0.25s cubic-bezier(.4,2,.6,1);
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.1rem;
    align-items: start;
    box-shadow: 0 2px 8px rgba(130, 124, 102, 0.07);
    position: relative;
  }
  .place-item:hover {
    background: linear-gradient(135deg, rgba(186, 210, 158, 0.28), rgba(232, 240, 223, 0.45));
    border-left-width: 7px;
    transform: translateY(-2px) scale(1.012);
    box-shadow: 0 6px 18px rgba(130, 124, 102, 0.13);
    z-index: 2;
  }
  .place-main {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .place-name-compact {
    font-family: 'Sriracha', cursive;
    font-size: 1.18rem;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    letter-spacing: 0.2px;
  }
  .place-name-compact::before {
    content: '🌿';
    font-size: 1.1rem;
  }
  .place-details {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
    font-size: 0.98rem;
  }
  .detail-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: #555;
  }
  .detail-icon {
    font-size: 1.08rem;
  }
  .map-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.65rem 1.3rem;
    background: linear-gradient(135deg, var(--primary), #9a9482);
    color: white;
    text-decoration: none;
    border-radius: 22px;
    font-weight: 600;
    font-size: 0.98rem;
    transition: all 0.22s cubic-bezier(.4,2,.6,1);
    white-space: nowrap;
    box-shadow: 0 2px 8px rgba(130, 124, 102, 0.13);
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }
  .map-btn:hover {
    transform: scale(1.07) translateY(-1px);
    box-shadow: 0 4px 16px rgba(130, 124, 102, 0.18);
    background: linear-gradient(135deg, #9a9482, var(--primary));
  }
  .footer {
    text-align: center;
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 2px solid var(--accent);
    color: var(--primary);
    font-size: 1.15rem;
    width: 100vw;
    background: transparent;
    z-index: 2;
  }
  @media (max-width: 900px) {
    .page, .header {
      max-width: 100vw;
      border-radius: 0 0 24px 24px;
    }
    .zone-section {
      max-width: 98vw;
    }
  }
  @media (max-width: 600px) {
    .header h1 {
      font-size: 2.1rem;
    }
    .header p {
      font-size: 1.05rem;
    }
    .zone-title {
      font-size: 1.1rem;
    }
    .zone-header {
      gap: 0.7rem;
    }
    .zone-number {
      font-size: 1.2rem;
      width: 38px;
      height: 38px;
    }
    .page {
      border-radius: 0 0 12px 12px;
      padding-bottom: 24px;
    }
    .zone-section {
      margin-bottom: 1.2rem;
    }
    .footer {
      font-size: 1rem;
      padding-top: 0.7rem;
    }
  }
`;

const PlanPage: React.FC = () => (
  <>
    {fontLink}
    <style>{style}</style>
    <div className="page">
      {/* Header */}
      <div className="header">
        <h1>ที่เที่ยวที่แนะนำ สำหรับมางานแต่ง มิ้นท์ แหม็ก</h1>
      </div>

      <div className="zones-row">
        {/* Zone 1 */}
        <div className="zone-section">
          <div className="zone-header">
            <div className="zone-number">1</div>
            <h2 className="zone-title">โซนที่หนึ่ง</h2>
          </div>
          <div className="places-compact">
            <div className="place-item">
              <div className="place-main">
                <h3 className="place-name-compact">วัดถ้ำเขาวง</h3>
                <div className="place-details">
                  <div className="detail-item">
                    <span className="detail-icon">🕐</span>
                    <span>08.00-16.30 น.</span>
                  </div>
                </div>
              </div>
              <a
                href="https://goo.gl/maps/uJjXeWfKMzRWBdy7A"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                📍 แผนที่
              </a>
            </div>
            <div className="place-item">
              <div className="place-main">
                <h3 className="place-name-compact">ต้นไม้ยักษ์</h3>
                <div className="place-details">
                  <div className="detail-item">
                    <span className="detail-icon">🕐</span>
                    <span>เที่ยวชมได้ตลอดทั้งวัน</span>
                  </div>
                </div>
              </div>
              <a
                href="https://goo.gl/maps/qXv5XjCYFHoMnho57"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                📍 แผนที่
              </a>
            </div>
            <div className="place-item">
              <div className="place-main">
                <h3 className="place-name-compact">ตลาดซาวไฮ่</h3>
                <div className="place-details">
                  <div className="detail-item">
                    <span className="detail-icon">🕐</span>
                    <span>วันเสาร์-อาทิตย์ 08.00-17.00 น.</span>
                  </div>
                </div>
              </div>
              <a
                href="https://goo.gl/maps/cJx2Ffs4EruxWfZb7"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                📍 แผนที่
              </a>
            </div>
          </div>
        </div>

        {/* Zone 2 */}
        <div className="zone-section">
          <div className="zone-header">
            <div className="zone-number">2</div>
            <h2 className="zone-title">โซนที่สอง</h2>
          </div>
          <div className="places-compact">
            <div className="place-item">
              <div className="place-main">
                <h3 className="place-name-compact">จุดชมวิว บ้านชายเขา</h3>
                <div className="place-details">
                  <div className="detail-item">
                    <span className="detail-icon">🕐</span>
                    <span>06.00-18.00 น.</span>
                  </div>
                </div>
              </div>
              <a
                href="https://goo.gl/maps/TT4XLBiSZyoJQ7sN9"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                📍 แผนที่
              </a>
            </div>
            <div className="place-item">
              <div className="place-main">
                <h3 className="place-name-compact">หุบป่าตาด</h3>
                <div className="place-details">
                  <div className="detail-item">
                    <span className="detail-icon">🕐</span>
                    <span>08.30-16.30 น.</span>
                  </div>
                </div>
              </div>
              <a
                href="https://goo.gl/maps/CipzWLN1tKKjQpvd6"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                📍 แผนที่
              </a>
            </div>
            <div className="place-item">
              <div className="place-main">
                <h3 className="place-name-compact">
                  เขตรักษาพันธุ์สัตว์ป่าห้วยขาแข้ง
                </h3>
                <div className="place-details">
                  <div className="detail-item">
                    <span className="detail-icon">🕐</span>
                    <span>08.00-17.00 น.</span>
                  </div>
                </div>
              </div>
              <a
                href="https://goo.gl/maps/AHfVYjDaPgFcrZcD6"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                📍 แผนที่
              </a>
            </div>
          </div>
        </div>

        {/* Zone 3 */}
        <div className="zone-section">
          <div className="zone-header">
            <div className="zone-number">3</div>
            <h2 className="zone-title">โซนที่สาม</h2>
          </div>
          <div className="places-compact">
            <div className="place-item">
              <div className="place-main">
                <h3 className="place-name-compact">วัดจันทาราม วัดท่าซุง</h3>
                <div className="place-details">
                  <div className="detail-item">
                    <span className="detail-icon">🕐</span>
                    <span>08.00-16.00 น.</span>
                  </div>
                </div>
              </div>
              <a
                href="https://goo.gl/maps/qFM1DZ8WquBxXcvL9"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                📍 แผนที่
              </a>
            </div>
            <div className="place-item">
              <div className="place-main">
                <h3 className="place-name-compact">
                  ตลาดเก่าบ้านสะแกกรัง ตรอกโรงยา
                </h3>
                <div className="place-details">
                  <div className="detail-item">
                    <span className="detail-icon">🕐</span>
                    <span>วันเสาร์ 15.00-20.00 น.</span>
                  </div>
                </div>
              </div>
              <a
                href="https://goo.gl/maps/qM7MYV4nffBkyC2TA"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                📍 แผนที่
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>🌿 สัมผัสธรรมชาติ สัมผัสความสุข 🌿</p>
      </div>
    </div>
  </>
);

export default PlanPage;
