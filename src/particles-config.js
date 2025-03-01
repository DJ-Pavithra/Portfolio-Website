const particlesConfig = {
    background: {
      color: "#0d1117",
    },
    particles: {
      number: {
        value: 50,
      },
      color: {
        value: "#39FF14",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };
  
  export default particlesConfig;
  