"use client";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <button>reset</button>
    </div>
  );
}

export default Error;
