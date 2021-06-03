import { useCallback, useEffect, useMemo, useState } from 'react';

export default function Loader() {
  const [pressed, setPressed] = useState(false);
  useMemo(() => { }, []);
  useEffect(() => { }, []);
  const handleClick = useCallback(() => {
    setPressed(true);
  }, []);
  return (
    <button className={"loader" + (pressed ? ' loader-animation-button' : '')} onClick={handleClick}>
      <span className="b1" />
      <span className="b2" />
      <span className="b3" />
      <span className="b4" />
      <span className="b5" />
      <span className="b6" />
      <span className="b7" />
      <span className="b8" />
      <span className="b9" />
      <span className="b10" />
      <span className="b11" />
      <span className="b12" />
        2020
    </button>
  );
}
