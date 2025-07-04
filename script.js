document.getElementById("storyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const audience = document.getElementById("audience").value;
  const storyAbout = document.getElementById("storyAbout").value;
  const message = document.getElementById("message").value;
  const why = document.getElementById("why").value;

  let recommendation = "";

  if (audience === "donors" && storyAbout === "impact" && why === "investment") {
    recommendation = "📢 Tell an <strong>Impact Story</strong> that showcases tangible results to attract donor investment.";
  } else if (audience === "practitioners" && storyAbout === "process") {
    recommendation = "🛠️ Tell a <strong>Process Story</strong> to share practical lessons with peers.";
  } else if (audience === "people" && message === "impact-lives") {
    recommendation = "🌍 Tell a <strong>Creative Story</strong> that connects emotionally and shows how interventions can change lives.";
  } else if (audience === "researchers" && storyAbout === "process") {
    recommendation = "📚 Tell a <strong>Process Story</strong> with detailed methods to inform evidence generation.";
  } else {
    recommendation = "🧭 Consider a <strong>Narrative Story</strong> to connect how your approach and impact fit into a broader journey.";
  }

  document.getElementById("result").innerHTML = recommendation;
});
