<!-- Header typing animation -->
<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&duration=3000&pause=1000&color=02B3F7&center=true&vCenter=true&width=500&lines=Hi%2C+I'm+Doan+Sinh+Duc+%F0%9F%A4%9D;%F0%9F%A7%A0+AI+Research+Interests;%F0%9F%8E%93+Embedded+Systems+%26+IoT+Student;Relentless+practice+builds+perfection)](https://git.io/typing-svg)
</div>

## 👤 About Me
I am a Smart Embedded Systems & IoT undergraduate student at **Hanoi University of Science and Technology (HUST)**, conducting research at the **EDABK Laboratory**. My work lies at the intersection of **Neuromorphic Computing**, **Deep Learning on Biomedical Signals**, and **Efficient Edge AI**.
- 🎓 **B.S. in Smart Embedded Systems and IoT (Expected 2027)** @ Hanoi University of Science and Technology (HUST)
- 🔬 **Lab Member** @ EDABK Laboratory, HUST
- 👨‍🏫 **Teaching Assistant** @ Global Consumer Intelligence Course, Matsuo-Iwasawa Laboratory, The University of Tokyo
- 💼 **Artificial Intelligence Intern** @ Viettel Telecom & HANET Technology
- 🏆 **2nd Place Winner & Top 100 Global Teams** — HSIL Hackathon 2026 (Harvard Health Systems Innovation Lab)
- 🎖️ **Outstanding Student** — Global Consumer Intelligence Course 2025 (Matsuo-Iwasawa Lab, UTokyo)

---

## 🔭 Research Interests & Focus

- **Emerging AI Architectures for Biosignals:** Training and deploying Spiking Neural Networks (SNN) and Kolmogorov-Arnold Networks (KAN) alongside neural architecture search (MLP NAS) on biological signals, specifically ECG and PPG.
- **Efficient Edge AI:** Developing, quantizing, and deploying real-time Computer Vision systems to balance extreme efficiency with high accuracy.


---

## 🚀 Featured Projects

### 🫀 Neuromorphic Ear-to-Chest ECG Reconstruction with Perceptual Loss
*Deep Learning | Spiking Neural Networks | Bio-signal Modeling | Model Quantization*
*   **Concept:** Reconstructing clinical-grade chest ECG signals from noisy ear-worn wearable sensors to enable continuous cardiovascular monitoring.
*   **Methodology:** Developed a quantized SNN autoencoder using 4-bit Learnable Step Size Quantization (LSQ) Conv1D layers and MultiSpike activations. Built a composite loss function incorporating MSE, ECGFounder-based perceptual loss, and Pearson correlation.
*   **Results:** Reconstructed signals reached a **0.8508 Pearson correlation** on unseen test subjects, rising to **0.9065** with personalized decoder tuning. The network operates on only **13,684 parameters** and **13.44M MACs** per 2-second window, making it highly viable for neuromorphic edge hardware.
*   [[Code/Repository](https://github.com/doan-duc/ecg_perceptual)]

### 📹 Edge AI Product Recognition via 16-Stream RTSP
*Computer Vision | NVIDIA DeepStream SDK| TensorRT | Jetson Nano*
*   **Concept:** High-throughput real-time product tracking at the edge using resource-constrained devices.
*   **Methodology:** Built a parallelized DeepStream-based video pipeline processing 16 concurrent RTSP streams on a single Jetson Nano. Employed post-training FP16 quantization via TensorRT and knowledge distillation on YOLOv8n.
*   **Results:** Sustained robust detection accuracy and real-time processing constraints at target distances up to 10 meters.
*   [[Code/Repository](https://github.com/doan-duc/DeepStream-YOLOv8-Jetson-Nano-16RTSP)]

### 📦 Multi-tier Electronic Component Packaging AI Control System
*Real-time Object Tracking | YOLOv8 | Anchor Mapping | Industry 4.0*
*   **Concept:** Automating quality assurance in electronics manufacturing lines.
*   **Methodology:** Deployed a custom-trained YOLOv8n detector tracking 11 component classes across a 2-tier packaging setup. Implemented a proprietary "Anchor-based Mapping" algorithm to synchronize state machines across 4 camera feeds.
*   **Results:** Achieved low-latency error alerts for missing components, incorrect packaging order, or positioning errors.
*   [[Code/Repository](https://github.com/doan-duc/OSCO-Object-Scanning-and-Checklist-Optimization)]

---

## 🛠️ Research & Engineering Toolkit

<table>
  <tr>
    <td><b>Theoretical & Research Areas</b></td>
    <td>Spiking Neural Networks (SNN), Neural Architecture Search (NAS), Deep Learning on Biosignals</td>
  </tr>
  <tr>
    <td><b>Frameworks & Tools</b></td>
    <td>PyTorch, TensorFlow, Keras, SpikingJelly, OpenCV, Ultralytics, Git, Docker</td>
  </tr>
  <tr>
    <td><b>Languages</b></td>
    <td>Python, C, C++ </td>
  </tr>
  <tr>
    <td><b>Hardware & Deployment</b></td>
    <td>NVIDIA Jetson Nano, TensorRT, NVIDIA DeepStream, GStreamer, ESP32</td>
  </tr>
</table>

---

<img src="https://github-readme-activity-graph.vercel.app/graph?username=doan-duc&theme=react-dark&hide_border=true&area=true" width="100%"/>

## 📊 GitHub Stats

<div align="center">

<a href="https://github.com/doan-duc">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=doan-duc&show_icons=true&theme=react&hide_border=true&bg_color=0D1117&title_color=02B3F7&icon_color=02B3F7&text_color=c9d1d9&count_private=true&include_all_commits=true" alt="Doan Duc's GitHub Stats"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=doan-duc&layout=compact&theme=react&hide_border=true&bg_color=0D1117&title_color=02B3F7&text_color=c9d1d9&langs_count=8" alt="Top Languages"/>
</a>

<br/>

[![GitHub Streak](https://streak-stats.demolab.com?user=doan-duc&theme=dark&hide_border=true&date_format=j%20M%5B%20Y%5D)](https://git.io/streak-stats)

<!-- WakaTime Card (uncomment after setting up WakaTime: https://wakatime.com)
<br/>
<img src="https://github-readme-stats.vercel.app/api/wakatime?username=doan-duc&theme=react&hide_border=true&bg_color=0D1117&title_color=02B3F7&text_color=c9d1d9&layout=compact" alt="WakaTime Stats"/>
-->

</div>

---

## 📫 Contact & Links
<div align="center">

[![Gmail](gmail.svg)](mailto:doansinhduc@gmail.com)
[![HUST Email](hust_email.svg)](mailto:duc.ds234000@sis.hust.edu.vn)
[![HUST](https://img.shields.io/badge/HUST-Student-CE1628?style=for-the-badge)](https://www.hust.edu.vn)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-000000?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/doanduc2312)
[![Profile Views](https://komarev.com/ghpvc/?username=doan-duc&style=for-the-badge&color=8A2BE2)](https://github.com/doan-duc)

</div>

---

<!-- Footer wave animation -->
<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=150&color=gradient&text=Thanks%20for%20viewing%20my%20profile!-nl-Let's%20connect%20and%20research%20something%20awesome%20together%20🤝&fontSize=30&animation=twinkling&fontAlign=50&descAlignY=0&descAlign=0&section=footer&fontColor=FFFFFF&fontAlignY=69"/>
</div>

