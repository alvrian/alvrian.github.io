import React, { useEffect, useRef, useState } from "react";
import "./Card.css";
import Icon from "./Icon";

const isVideo = (src) => Boolean(src) && /\.(mp4|webm|ogg)$/i.test(src);

export default function Card({
  title,
  category,
  problem,
  context,
  role,
  stack = [],
  desc,
  media,
  demo,
  repo,
  link,
}) {
  const [isOpen, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = `${title.replace(/[^a-z0-9]+/gi, "-")}-title`;

  const preloadMedia = () => {
    if (!demo) return;
    if (isVideo(demo)) {
      const video = document.createElement("video");
      video.src = demo;
      video.preload = "auto";
    } else {
      const img = new Image();
      img.src = demo;
    }
  };

  const close = () => {
    setOpen(false);
    // Return focus to the card that opened the dialog.
    requestAnimationFrame(() => triggerRef.current && triggerRef.current.focus());
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    closeRef.current && closeRef.current.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <article className="project-card">
      <div className="project-media">
        {media ? (
          <img src={media} alt="" loading="lazy" />
        ) : (
          <span className="project-media-empty">{category}</span>
        )}
        <span className="project-tag">{category}</span>
      </div>

      <div className="project-body">
        <h3>{title}</h3>
        <p className="project-problem">{problem}</p>
        {context && <p className="project-meta">{context}</p>}
        {role && (
          <p className="project-meta">
            <strong>My role: </strong>
            {role}
          </p>
        )}
        {stack.length > 0 && (
          <ul className="project-stack" aria-label="Tech used">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className="project-actions">
          <button
            ref={triggerRef}
            type="button"
            className="link-button"
            onMouseEnter={preloadMedia}
            onFocus={preloadMedia}
            onClick={() => setOpen(true)}
          >
            View details
          </button>
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              Repository <Icon name="external" size={14} />
            </a>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="popup"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="popup-content">
            <div className="popup-header">
              <div>
                <p className="project-tag static">{category}</p>
                <h3 id={titleId}>{title}</h3>
              </div>
              <button
                ref={closeRef}
                className="icon-button"
                type="button"
                onClick={close}
                aria-label="Close project details"
              >
                <Icon name="close" />
              </button>
            </div>

            <div className={demo ? "popup-grid" : "popup-grid single"}>
              {demo && (
                <div className="popup-media">
                  {isVideo(demo) ? (
                    <video controls autoPlay muted playsInline>
                      <source src={demo} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={demo} alt={`${title} screenshots`} />
                  )}
                </div>
              )}

              <div className="popup-details">
                <p>{desc}</p>
                {stack.length > 0 && (
                  <ul className="project-stack" aria-label="Tech used">
                    {stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <div className="popup-links">
                  {repo && (
                    <a className="btn btn-ghost" href={repo} target="_blank" rel="noopener noreferrer">
                      <Icon name="github" /> Repository
                    </a>
                  )}
                  {link && (
                    <a className="btn btn-primary" href={link} target="_blank" rel="noopener noreferrer">
                      <Icon name="external" /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
