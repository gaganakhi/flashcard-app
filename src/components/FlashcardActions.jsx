import { FiDownload, FiPrinter, FiShare2 } from "react-icons/fi";

export default function FlashcardActions({ card, visible }) {
  // 👇 correct visibility check
  if (!visible || !card) return null;

  const content = `
Title: ${card.title}
Description: ${card.description}

${card.terms
  .map((t, i) => `${i + 1}. ${t.term} - ${t.definition}`)
  .join("\n")}
`;

  // DOWNLOAD (TEXT)
  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${card.title}.txt`;
    a.click();

    URL.revokeObjectURL(url);
  };

  // PRINT
  const handlePrint = () => {
    const win = window.open("", "", "width=800,height=600");
    win.document.write(`<pre>${content}</pre>`);
    win.document.close();
    win.print();
  };

  // SHARE / COPY
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: card.title,
        text: content,
      });
    } else {
      await navigator.clipboard.writeText(content);
      alert("Flashcard copied to clipboard");
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleShare}
        className="w-full bg-white shadow rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50"
      >
        <FiShare2 /> Share
      </button>

      <button
        onClick={handleDownload}
        className="w-full bg-white shadow rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50"
      >
        <FiDownload /> Download
      </button>

      <button
        onClick={handlePrint}
        className="w-full bg-white shadow rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50"
      >
        <FiPrinter /> Print
      </button>
    </div>
  );
}
