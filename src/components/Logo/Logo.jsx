import { StyledLogo } from "./styled";
export default function Logo({
  name,
  url,
  width,
  height,
  margin,
  bool,
  color,
}) {
  return (
    <StyledLogo href={url} target="_blank" bool={bool}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 56.69 56.69"
        xmlSpace="preserve"
        fill={color}
        width={width}
        height={height}
        style={{ margin: `${margin}` }}
      >
        <g id={name}>
          {name === "github" && (
            <path
              className="st2"
              d="M18.96,45.65c0,0.23-0.26,0.42-0.59,0.42c-0.38,0.04-0.64-0.15-0.64-0.42c0-0.23,0.26-0.42,0.59-0.42   C18.67,45.19,18.96,45.38,18.96,45.65z M15.41,45.12c-0.08,0.23,0.15,0.5,0.49,0.57c0.3,0.12,0.64,0,0.71-0.23   c0.07-0.23-0.15-0.5-0.49-0.61C15.82,44.77,15.49,44.89,15.41,45.12L15.41,45.12z M20.46,44.92c-0.33,0.08-0.56,0.3-0.53,0.57   c0.03,0.23,0.33,0.39,0.67,0.3c0.33-0.08,0.56-0.3,0.53-0.54C21.1,45.04,20.79,44.89,20.46,44.92z M27.98,0C12.13,0,0,12.34,0,28.6   c0,13,7.98,24.13,19.37,28.04c1.46,0.27,1.98-0.66,1.98-1.42c0-0.73-0.03-4.74-0.03-7.2c0,0-8,1.76-9.68-3.49   c0,0-1.3-3.41-3.18-4.29c0,0-2.62-1.84,0.18-1.81c0,0,2.85,0.23,4.41,3.02c2.5,4.53,6.7,3.22,8.33,2.45   c0.26-1.88,1.01-3.18,1.83-3.95c-6.39-0.73-12.84-1.68-12.84-12.95c0-3.22,0.87-4.84,2.7-6.9c-0.3-0.76-1.27-3.9,0.3-7.96   c2.39-0.76,7.89,3.17,7.89,3.17c2.29-0.66,4.74-1,7.18-1s4.89,0.34,7.18,1c0,0,5.5-3.94,7.89-3.17c1.57,4.07,0.59,7.2,0.3,7.96   c1.83,2.07,2.95,3.69,2.95,6.9c0,11.31-6.73,12.22-13.12,12.95c1.05,0.93,1.94,2.68,1.94,5.44c0,3.95-0.03,8.84-0.03,9.8   c0,0.76,0.53,1.69,1.98,1.42C48.94,52.73,56.69,41.6,56.69,28.6C56.69,12.34,43.83,0,27.98,0z M11.11,40.43   c-0.15,0.12-0.11,0.39,0.08,0.61c0.18,0.19,0.45,0.27,0.59,0.12c0.15-0.12,0.11-0.39-0.08-0.61   C11.52,40.36,11.26,40.28,11.11,40.43z M9.88,39.48c-0.08,0.15,0.03,0.34,0.26,0.46c0.18,0.12,0.41,0.08,0.49-0.08   c0.08-0.15-0.03-0.34-0.26-0.46C10.14,39.33,9.96,39.37,9.88,39.48z M13.58,43.66c-0.18,0.15-0.11,0.5,0.15,0.73   c0.26,0.27,0.59,0.3,0.74,0.12c0.15-0.15,0.08-0.5-0.15-0.73C14.07,43.5,13.73,43.47,13.58,43.66z M12.28,41.93   c-0.18,0.12-0.18,0.42,0,0.69s0.49,0.39,0.64,0.27c0.18-0.15,0.18-0.46,0-0.73C12.76,41.9,12.46,41.78,12.28,41.93L12.28,41.93z"
            />
          )}
          {name === "linkedin" && (
            <path
              className="st2"
              d="M52.64,0H4.04C1.81,0,0,1.83,0,4.09v48.52c0,2.25,1.81,4.09,4.04,4.09h48.61c2.23,0,4.05-1.83,4.05-4.09V4.09   C56.69,1.83,54.87,0,52.64,0z M17.13,48.59h-8.4V21.54h8.42v27.06H17.13z M12.93,17.84c-2.7,0-4.87-2.19-4.87-4.87   s2.18-4.87,4.87-4.87c2.68,0,4.87,2.19,4.87,4.87C17.81,15.67,15.63,17.84,12.93,17.84z M48.63,48.59h-8.4V35.43   c0-3.14-0.06-7.18-4.37-7.18c-4.38,0-5.05,3.42-5.05,6.95v13.39h-8.4V21.54h8.06v3.7h0.11c1.13-2.13,3.87-4.37,7.96-4.37   c8.5,0,10.09,5.61,10.09,12.9V48.59z"
            />
          )}
          {name === "instagram" && (
            <path
              className="st3"
              d="M28.35,13.81c-8.04,0-14.53,6.49-14.53,14.54s6.49,14.54,14.53,14.54s14.53-6.49,14.53-14.54   S36.4,13.81,28.35,13.81z M28.35,37.8c-5.2,0-9.45-4.24-9.45-9.45s4.24-9.45,9.45-9.45s9.45,4.24,9.45,9.45S33.55,37.8,28.35,37.8   L28.35,37.8z M46.87,13.22c0,1.88-1.52,3.39-3.39,3.39c-1.88,0-3.39-1.52-3.39-3.39s1.52-3.39,3.39-3.39   C45.35,9.83,46.87,11.34,46.87,13.22z M56.49,16.66c-0.22-4.54-1.25-8.56-4.58-11.88C48.6,1.46,44.58,0.43,40.04,0.2   c-4.68-0.27-18.71-0.27-23.39,0C12.13,0.41,8.1,1.45,4.78,4.77S0.43,12.1,0.2,16.64c-0.27,4.68-0.27,18.71,0,23.39   c0.22,4.54,1.25,8.56,4.58,11.88s7.34,4.35,11.88,4.58c4.68,0.27,18.71,0.27,23.39,0c4.54-0.22,8.56-1.25,11.88-4.58   c3.31-3.31,4.35-7.34,4.58-11.88C56.76,35.35,56.76,21.34,56.49,16.66L56.49,16.66z M50.45,45.06c-0.99,2.48-2.9,4.39-5.39,5.39   c-3.73,1.48-12.58,1.14-16.71,1.14s-12.99,0.33-16.71-1.14c-2.48-0.99-4.39-2.9-5.39-5.39c-1.48-3.73-1.14-12.59-1.14-16.71   S4.79,15.35,6.26,11.64c0.99-2.48,2.9-4.39,5.39-5.39c3.73-1.48,12.58-1.14,16.71-1.14s12.99-0.33,16.71,1.14   c2.48,0.99,4.39,2.9,5.39,5.39c1.48,3.73,1.14,12.59,1.14,16.71S51.93,41.34,50.45,45.06z"
            />
          )}
        </g>
      </svg>
    </StyledLogo>
  );
}
