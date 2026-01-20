import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { motion, useInView } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, AlertTriangle, CheckCircle, XCircle, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

export default function AKGCDeepDive() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen bg-background py-8" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="mb-8" variants={itemVariants}>
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold">Adaptive Knowledge-Guided Correction</h1>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Flagship Project</Badge>
            </div>
            <p className="text-xl text-muted-foreground mb-2">
              A production-oriented framework for detecting and correcting hallucinations in Large Language Models
            </p>
            <p className="text-sm text-muted-foreground/80 italic mb-4">
              This page is a technical deep dive intended to demonstrate system design, tradeoffs, and failure handling rather than a polished product announcement.
            </p>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" asChild>
                <a href="https://github.com/Eminence-bit/Adaptive-Knowledge-Guided-Correction_" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Repository
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Problem Framing */}
          <motion.section className="mb-12" variants={itemVariants}>
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-400" />
                  Problem Framing
                </CardTitle>
                <CardDescription>Why AKGC exists and why existing solutions fall short</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Why hallucinations aren't solved by fine-tuning alone</h4>
                  <p className="text-muted-foreground">
                    Modern LLMs hallucinate in ways that fine-tuning cannot address comprehensively. Fine-tuning requires 
                    massive datasets for every possible factual domain and doesn't generalize well to new knowledge or 
                    edge cases. The model's parametric knowledge becomes outdated quickly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Detection ≠ Correction</h4>
                  <p className="text-muted-foreground">
                    Most existing systems focus on detecting hallucinations but fail at the correction step. Detection 
                    without actionable correction leaves users with flagged but unfixed content, reducing practical utility.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Why inference-time correction matters</h4>
                  <p className="text-muted-foreground">
                    Inference-time correction allows for dynamic knowledge integration, real-time fact verification, 
                    and adaptation to new information without retraining. This approach scales better and provides 
                    more reliable factual accuracy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* System Architecture */}
          <motion.section className="mb-12" variants={itemVariants}>
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  System Architecture
                </CardTitle>
                <CardDescription>The spine of AKGC's processing pipeline</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between text-sm font-mono">
                    <span>Input Text</span>
                    <span>→</span>
                    <span>Detection</span>
                    <span>→</span>
                    <span>Knowledge Retrieval</span>
                    <span>→</span>
                    <span>Correction</span>
                    <span>→</span>
                    <span>Evaluation</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Core Components</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>Contextual Analyzer:</strong> DistilBERT for semantic similarity computation</li>
                      <li><strong>Entity Extractor:</strong> Identifies relevant entities for knowledge graph queries</li>
                      <li><strong>Knowledge Graph Manager:</strong> Fetches and caches facts from external sources</li>
                      <li><strong>Correction Engine:</strong> Applies adaptive correction based on HVI scores</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Performance Characteristics</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>Latency:</strong> Sub-100ms processing (Ultra-optimized: 0.0ms)</li>
                      <li><strong>Memory:</strong> Lightweight DistilBERT-based approach</li>
                      <li><strong>Scalability:</strong> Stateless design with caching layer</li>
                      <li><strong>Deployment:</strong> Docker containerized with REST API</li>
                      <li><strong>Uncertainty:</strong> Detection confidence is treated as probabilistic rather than binary, allowing downstream correction to adapt rather than hard-switch</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Core Innovation */}
          <motion.section className="mb-12" variants={itemVariants}>
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  Core Innovation
                </CardTitle>
                <CardDescription>What's actually novel in AKGC's approach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Knowledge-Guided Correction</h4>
                  <p className="text-muted-foreground mb-2">
                    Unlike traditional approaches that rely solely on model confidence or simple fact-checking, 
                    AKGC integrates dynamic knowledge graphs at inference time to guide corrections.
                  </p>
                  <div className="bg-muted/20 p-3 rounded text-sm font-mono">
                    When HVI &lt; threshold → Extract entity → Fetch verified facts → Apply correction
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Hallucination Vulnerability Index (HVI)</h4>
                  <p className="text-muted-foreground mb-2">
                    A custom metric that combines semantic similarity, entity confidence, and contextual coherence 
                    to quantify the likelihood of hallucination in generated text. Compared to heuristic-based confidence scoring, 
                    HVI provides more nuanced detection by integrating multiple signal sources. HVI is designed for comparative risk scoring rather than absolute truth verification.
                  </p>
                  <div className="bg-muted/20 p-3 rounded text-sm">
                    <strong>HVI Formula:</strong> Combines semantic similarity scores, entity extraction confidence, 
                    and knowledge graph verification results into a single vulnerability score.
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Design Choice Rationale</h4>
                  <p className="text-muted-foreground">
                    This design was chosen over alternatives like retrieval-augmented generation (RAG) or 
                    post-hoc fact-checking because it provides real-time correction with minimal latency overhead 
                    while maintaining high accuracy across diverse domains.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Evaluation & Tradeoffs */}
          <motion.section className="mb-12" variants={itemVariants}>
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Evaluation & Tradeoffs</CardTitle>
                <CardDescription>Metrics, limitations, and honest assessment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Performance Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-500/10 p-3 rounded border border-green-500/20">
                      <div className="text-2xl font-bold text-green-400">Perfect</div>
                      <div className="text-sm text-muted-foreground">Observed perfect accuracy on curated domain benchmarks</div>
                      <div className="text-xs text-muted-foreground mt-1">On curated test domains</div>
                    </div>
                    <div className="bg-blue-500/10 p-3 rounded border border-blue-500/20">
                      <div className="text-2xl font-bold text-blue-400">96.6ms</div>
                      <div className="text-sm text-muted-foreground">Avg Latency</div>
                      <div className="text-xs text-muted-foreground mt-1">Standard API mode</div>
                    </div>
                    <div className="bg-purple-500/10 p-3 rounded border border-purple-500/20">
                      <div className="text-2xl font-bold text-purple-400">6</div>
                      <div className="text-sm text-muted-foreground">Domains Tested</div>
                      <div className="text-xs text-muted-foreground mt-1">Science, History, Medicine, etc.</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">What I Sacrificed</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Complexity:</strong> Added system complexity with knowledge graph integration</li>
                    <li><strong>Latency:</strong> Standard mode trades speed for accuracy (96.6ms vs 0.0ms ultra-optimized)</li>
                    <li><strong>Coverage:</strong> Limited to domains with reliable knowledge graph coverage</li>
                    <li><strong>Dependencies:</strong> Requires external knowledge sources and caching infrastructure</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Where the System Fails</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Struggles with highly specialized or niche domains lacking knowledge graph coverage</li>
                    <li>Performance degrades with very long input texts (&gt;1000 tokens)</li>
                    <li>Requires manual threshold tuning for optimal performance in new domains</li>
                    <li>Knowledge graph freshness affects correction quality for rapidly changing facts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* What Broke */}
          <motion.section className="mb-12" variants={itemVariants}>
            <Card className="card-glow border-orange-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-orange-400" />
                  What Broke
                </CardTitle>
                <CardDescription>Honest lessons from development failures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Initial Assumption That Failed</h4>
                  <p className="text-muted-foreground mb-2">
                    Originally assumed that semantic similarity alone would be sufficient for hallucination detection. 
                    This failed because semantically coherent text can still be factually incorrect. Had to integrate 
                    entity-level fact verification to achieve reliable detection.
                  </p>
                  <p className="text-sm font-medium text-orange-400">Key Lesson: Semantic coherence ≠ factual accuracy</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Design I Abandoned</h4>
                  <p className="text-muted-foreground mb-2">
                    First iteration used a complex ensemble of multiple language models for cross-validation. 
                    This approach was computationally expensive and didn't significantly improve accuracy over 
                    the current DistilBERT + knowledge graph approach. Simplified to current architecture for 
                    better latency-accuracy tradeoff.
                  </p>
                  <p className="text-sm font-medium text-orange-400">Key Lesson: Complexity doesn't always equal better performance</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Result That Didn't Generalize</h4>
                  <p className="text-muted-foreground mb-2">
                    Initial testing on scientific papers showed 95%+ accuracy, but this didn't generalize to 
                    conversational text or creative writing. Had to develop domain-specific threshold tuning 
                    and expand training data to achieve consistent performance across text types.
                  </p>
                  <p className="text-sm font-medium text-orange-400">Key Lesson: Domain-specific validation is critical for real-world deployment</p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Future Scale */}
          <motion.section className="mb-12" variants={itemVariants}>
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>What I'd Do at 10× Scale</CardTitle>
                <CardDescription>Scaling considerations and architectural evolution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Data Scale</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Distributed knowledge graph sharding</li>
                      <li>Real-time knowledge graph updates</li>
                      <li>Multi-language knowledge base expansion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Model Scale</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Larger transformer models for better context</li>
                      <li>Domain-specific fine-tuned variants</li>
                      <li>Ensemble methods for critical applications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Infrastructure Changes</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Kubernetes orchestration for auto-scaling</li>
                      <li>Edge deployment for reduced latency</li>
                      <li>Streaming processing for real-time corrections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Evaluation Redesign</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Continuous evaluation pipeline</li>
                      <li>A/B testing framework for corrections</li>
                      <li>Human-in-the-loop validation system</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Technical Implementation */}
          <motion.section className="mb-12" variants={itemVariants}>
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Technical Implementation</CardTitle>
                <CardDescription>Key technical details and deployment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Python", "DistilBERT", "FastAPI", "Docker", "PyTorch", "Knowledge Graphs"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="badge-blue-light">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Deployment Options</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/20 p-3 rounded">
                      <h5 className="font-medium mb-1">Production API</h5>
                      <p className="text-sm text-muted-foreground">REST API with comprehensive endpoints for detection, correction, and evaluation</p>
                    </div>
                    <div className="bg-muted/20 p-3 rounded">
                      <h5 className="font-medium mb-1">Docker Container</h5>
                      <p className="text-sm text-muted-foreground">Containerized deployment with Docker Compose for easy scaling</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Performance Comparison</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-muted">
                          <th className="text-left p-2">System</th>
                          <th className="text-left p-2">Accuracy</th>
                          <th className="text-left p-2">Latency</th>
                          <th className="text-left p-2">Speedup</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-muted/50">
                          <td className="p-2">KGCN (Baseline)</td>
                          <td className="p-2">84.0%</td>
                          <td className="p-2">212.86ms</td>
                          <td className="p-2">1.0×</td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="p-2">AKGC Standard</td>
                          <td className="p-2 text-green-400">100.0%</td>
                          <td className="p-2">40.71ms</td>
                          <td className="p-2 text-blue-400">5.2×</td>
                        </tr>
                        <tr>
                          <td className="p-2">AKGC Ultra</td>
                          <td className="p-2 text-green-400">100.0%</td>
                          <td className="p-2 text-green-400">0.0098ms</td>
                          <td className="p-2 text-green-400">21,701×</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-xs text-muted-foreground mt-2">
                      Performance measured under controlled evaluation workloads; real-world latency varies with input length and knowledge graph access.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Call to Action */}
          <motion.div className="text-center" variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="https://github.com/Eminence-bit/Adaptive-Knowledge-Guided-Correction_" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Inspect Implementation
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}