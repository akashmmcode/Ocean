function filerdata(a, b) {
  const data = b.filter((prev) =>
    prev.taskDesc.toLowerCase().includes(a.toLowerCase())
  );
  return data;
}

export { filerdata };
