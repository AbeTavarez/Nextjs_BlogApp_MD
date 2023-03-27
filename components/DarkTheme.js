function DarkTheme() {
  return (
    <style jsx global>{`
        :root {
          --bg-color: rgb(31, 31, 31);
          --text-color: rgb(225, 221, 221);
          --link-color: rgba(255, 217, 0, 0.947);
        }
      `} </style>
  );
}

export default DarkTheme;
