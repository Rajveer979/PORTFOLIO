import { useState, useEffect, useRef } from 'react';
import { trackEvent } from '../analytics/ga4';

const WA_PHONE = '919898130771';
const WA_MESSAGE = "Hi%20Rajveer%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const seen = sessionStorage.getItem('wa_seen');
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('wa_seen', '1');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  const handleToggle = () => {
    if (!isOpen && window.gtag) {
      window.gtag('event', 'whatsapp_start', { source: 'floating_button', type: 'whatsapp' });
    }
    setIsOpen((prev) => !prev);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={`wa-wrapper ${isOpen ? 'open' : ''}`}
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 12,
      }}
    >
      <div
        className={`wa-tooltip ${isOpen ? 'visible' : ''}`}
        style={{
          width: 260,
          background: 'var(--card-bg)',
          border: '0.5px solid var(--border-color)',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.5)',
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transformOrigin: 'bottom right',
          position: 'relative',
        }}
      >
        <span
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 12,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 13,
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          ✕
        </span>

        <div
          style={{
            background: 'linear-gradient(135deg, #128c7e, #25d366)',
            padding: '16px 14px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              flexShrink: 0,
              border: '1.5px solid rgba(255,255,255,0.25)',
            }}
          >
            👨‍💻
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: '#fff' }}>
              Rajveer M.
            </div>
            <div
              style={{
                fontSize: 10.5,
                color: 'rgba(255,255,255,0.75)',
                marginTop: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#fff',
                  display: 'inline-block',
                  animation: 'wa-blink 2s infinite',
                }}
              />
              Usually replies in 2 hrs
            </div>
          </div>
        </div>

        <div
          style={{
            padding: 14,
            fontSize: 12,
            color: '#7a9ab0',
            lineHeight: 1.65,
            fontFamily: "'Inter', sans-serif",
            background: 'var(--scrollbar-track)',
            borderLeft: '2px solid rgba(37,211,102,0.2)',
            margin: 12,
            borderRadius: '0 8px 8px 8px',
          }}
        >
          Hi there 👋<br />
          Got a question or opportunity? Let{'\u2019'}s talk on WhatsApp!
        </div>

        <a
          href={`https://wa.me/${WA_PHONE}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_start', { source: 'floating_button', type: 'whatsapp' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            margin: '0 12px 14px',
            padding: 10,
            borderRadius: 8,
            background: '#25d366',
            color: '#07090f',
            fontSize: 12,
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          💬 Start Chat
        </a>
      </div>

      <button
        onClick={handleToggle}
        title="Chat on WhatsApp"
        className="wa-btn"
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#25d366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(37, 211, 102, 0.45)',
          position: 'relative',
          flexShrink: 0,
          border: 'none',
          padding: 0,
        }}
      >
        {!isOpen && (
          <>
            <span
              style={{
                position: 'absolute',
                inset: -4,
                borderRadius: '50%',
                border: '2px solid rgba(37, 211, 102, 0.4)',
                animation: 'wa-pulse 2s ease-out infinite',
              }}
            />
            <span
              style={{
                position: 'absolute',
                inset: -8,
                borderRadius: '50%',
                border: '2px solid rgba(37, 211, 102, 0.2)',
                animation: 'wa-pulse 2s ease-out infinite 0.4s',
              }}
            />
          </>
        )}

        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width={20} height={20}>
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width={26} height={26}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.504 5.838L.057 23.535a.75.75 0 0 0 .916.932l5.898-1.543A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.184-1.432l-.37-.22-3.844 1.007 1.024-3.735-.242-.386A9.955 9.955 0 0 0 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        )}
      </button>
    </div>
  );
}
