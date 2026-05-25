export type SeoLandingPage = {
  path: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  serviceType: string;
  areaServed: string;
  overview: string[];
  applications: string[];
  industries: string[];
  process: string[];
  whyChoose: string[];
  capabilities: string[];
  faqs: { q: string; a: string }[];
  related: { to: string; label: string }[];
};

const industries = [
  "Automotive",
  "Aerospace",
  "Manufacturing",
  "Medical devices",
  "Tooling",
  "Defence",
  "Oil and gas",
  "Consumer products",
];

const baseWhyChoose = [
  "Hyderabad-based engineering team with practical manufacturing and CAD experience.",
  "Measurement-led workflow for parts, tools, prototypes and production components.",
  "Support from initial requirement review through digital deliverables and manufacturing handoff.",
  "Clear communication on tolerances, file formats, inspection needs and project scope.",
  "Confidential handling of component data, drawings, scans and product development inputs.",
  "Service coverage for Hyderabad clients and India-wide industrial teams.",
];

const relatedCore = [
  { to: "/3d-scanning-services", label: "3D Scanning" },
  { to: "/reverse-engineering-services", label: "Reverse Engineering" },
  { to: "/cad-modelling-services", label: "CAD Modelling" },
  { to: "/precision-manufacturing", label: "Precision Manufacturing" },
];

const page = (data: SeoLandingPage) => data;

export const seoLandingPages = [
  page({
    path: "/3d-scanning-services-hyderabad",
    title: "3D Scanning Services Hyderabad | Yetki Engineering",
    metaDescription:
      "3D scanning services in Hyderabad for industrial parts, tools, prototypes and inspection-ready engineering deliverables.",
    eyebrow: "Hyderabad 3D scanning",
    h1: "3D Scanning Services in Hyderabad",
    intro:
      "Yetki Engineering provides industrial 3D scanning services in Hyderabad for manufacturers, product developers, tooling teams and quality engineers who need accurate digital geometry from physical parts.",
    serviceType: "3D Scanning",
    areaServed: "Hyderabad, Telangana, India",
    overview: [
      "Our 3D scanning workflow helps teams capture complex surfaces, legacy parts, moulds, dies, prototypes and production components when drawings are unavailable or inspection data is needed. The output can support reverse engineering, CAD reconstruction, dimensional review, part comparison, design validation and manufacturing planning.",
      "For Hyderabad clients, the process is structured around practical engineering outcomes rather than scan data alone. We review the component, understand the required deliverable, choose the right capture approach and prepare files that can move into CAD, inspection or production workflows.",
      "Projects may include automotive brackets, plastic housings, sheet metal parts, machined components, tooling inserts, consumer product enclosures and industrial assemblies. The goal is to provide accurate digital data that reduces guesswork and improves downstream decisions.",
    ],
    applications: [
      "Reverse engineering of legacy components",
      "CAD reconstruction for parts without drawings",
      "Dimensional inspection and CAD comparison",
      "Prototype digitization for design improvement",
      "Tool, die and mould geometry capture",
      "Production part validation and documentation",
    ],
    industries,
    process: [
      "Requirement review: confirm part size, tolerance expectations, file formats and project purpose.",
      "Part preparation: clean surfaces, plan scanner positions and prepare reference targets where needed.",
      "Data capture: scan the component from required angles to collect complete geometry.",
      "Processing: align scans, remove noise, build mesh data and check coverage.",
      "Engineering output: deliver STL, mesh, CAD-ready references, inspection inputs or reverse engineering handoff.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "Industrial component scanning",
      "Mesh generation and cleanup",
      "Point cloud and STL deliverables",
      "CAD comparison support",
      "Reverse engineering handoff",
      "On-site and in-lab project support where feasible",
    ],
    faqs: [
      {
        q: "Do you provide 3D scanning services in Hyderabad?",
        a: "Yes. Yetki Engineering supports 3D scanning projects for Hyderabad-based manufacturers, product teams and tooling companies.",
      },
      {
        q: "What can 3D scan data be used for?",
        a: "Scan data can support reverse engineering, CAD modelling, dimensional inspection, prototype development, tooling review and production documentation.",
      },
      {
        q: "Can you scan parts without drawings?",
        a: "Yes. Parts without drawings are common reverse engineering inputs. The scan creates a digital reference for CAD reconstruction and measurement review.",
      },
    ],
    related: [
      { to: "/3d-scanning-services-india", label: "3D Scanning India" },
      { to: "/reverse-engineering-services-hyderabad", label: "Reverse Engineering Hyderabad" },
      { to: "/cad-inspection-services-hyderabad", label: "CAD Inspection Hyderabad" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/reverse-engineering-services-hyderabad",
    title: "Reverse Engineering Hyderabad | Yetki Engineering",
    metaDescription:
      "Reverse engineering services in Hyderabad for legacy parts, CAD reconstruction, redesign and manufacturing-ready documentation.",
    eyebrow: "Hyderabad reverse engineering",
    h1: "Reverse Engineering Services in Hyderabad",
    intro:
      "Yetki Engineering helps Hyderabad manufacturers convert physical components into usable engineering data for CAD modelling, redesign, inspection and production planning.",
    serviceType: "Reverse Engineering",
    areaServed: "Hyderabad, Telangana, India",
    overview: [
      "Reverse engineering is useful when a component exists but drawings, CAD data or supplier documentation are missing. We capture geometry, study functional features and rebuild the part into digital engineering data that can support repair, replacement, redesign or manufacturing.",
      "Our Hyderabad reverse engineering workflow connects 3D scanning, CAD modelling, inspection thinking and manufacturing awareness. Instead of only tracing shape, we consider how the part may be produced, where tolerances matter and which surfaces need clean design intent.",
      "Typical projects include obsolete machine parts, automotive components, plastic housings, tooling elements, brackets, covers, consumer product parts and assemblies that need controlled documentation before reproduction or improvement.",
    ],
    applications: [
      "Legacy part reconstruction",
      "Obsolete component replacement",
      "Product redesign and improvement",
      "CAD model creation from physical samples",
      "Manufacturing drawing preparation support",
      "Benchmarking and fitment review",
    ],
    industries,
    process: [
      "Study the part function, assembly context and expected deliverables.",
      "Capture geometry through measurement, scanning or reference data.",
      "Reconstruct CAD surfaces and parametric features where appropriate.",
      "Review fit-critical surfaces, hole positions, wall thickness and datum references.",
      "Deliver CAD files, drawings or manufacturing-ready references based on scope.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "Scan-to-CAD workflows",
      "Parametric CAD reconstruction",
      "Surface modelling support",
      "Legacy part documentation",
      "Manufacturing feasibility review",
      "Inspection-aware modelling",
    ],
    faqs: [
      {
        q: "Can you reverse engineer parts in Hyderabad?",
        a: "Yes. We support reverse engineering for Hyderabad clients using measurement, scanning and CAD reconstruction workflows.",
      },
      {
        q: "Do you provide CAD after reverse engineering?",
        a: "Yes. Depending on project scope, outputs can include CAD models, surface data, drawings or manufacturing references.",
      },
      {
        q: "Is reverse engineering suitable for obsolete parts?",
        a: "Yes. Obsolete or undocumented parts are one of the most common use cases for reverse engineering.",
      },
    ],
    related: [
      { to: "/reverse-engineering-company-india", label: "Reverse Engineering India" },
      { to: "/3d-scanning-services-hyderabad", label: "3D Scanning Hyderabad" },
      { to: "/cad-inspection-services-hyderabad", label: "CAD Inspection Hyderabad" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/cad-inspection-services-hyderabad",
    title: "CAD Inspection Hyderabad | Yetki Engineering",
    metaDescription:
      "CAD inspection services in Hyderabad for scan comparison, dimensional review and engineering validation of industrial parts.",
    eyebrow: "CAD inspection Hyderabad",
    h1: "CAD Inspection Services in Hyderabad",
    intro:
      "Yetki Engineering supports CAD inspection services in Hyderabad for teams that need to compare manufactured parts, tooling or prototypes against design intent.",
    serviceType: "CAD Inspection",
    areaServed: "Hyderabad, Telangana, India",
    overview: [
      "CAD inspection helps identify whether a physical part matches the intended design. By combining measurement data, scan references and engineering review, teams can find deviations, understand fit issues and improve product or tooling decisions.",
      "Our CAD inspection support is practical for prototype validation, production sampling, tool correction, reverse engineering review and supplier quality discussions. The workflow focuses on clear comparison data and engineering interpretation rather than raw measurements alone.",
      "Hyderabad manufacturing teams use CAD inspection when parts are complex, free-form, difficult to measure with simple tools or when a visual deviation map can speed up decision-making.",
    ],
    applications: [
      "Scan-to-CAD comparison",
      "Prototype dimensional validation",
      "Tool correction and mould review",
      "First article inspection support",
      "Assembly fit issue investigation",
      "Supplier part review",
    ],
    industries,
    process: [
      "Confirm CAD data, datum strategy, tolerance needs and reporting purpose.",
      "Capture the physical part using suitable measurement or scan methods.",
      "Align scan or measurement data to CAD using agreed references.",
      "Review deviation patterns, critical features and fit-related dimensions.",
      "Prepare inspection inputs or reports according to project scope.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "CAD comparison workflows",
      "Deviation map preparation support",
      "Dimensional review of free-form parts",
      "Prototype and production sample inspection",
      "Tooling correction feedback",
      "Engineering interpretation of measurement data",
    ],
    faqs: [
      {
        q: "What is CAD inspection?",
        a: "CAD inspection compares a physical part or scan data against CAD geometry to identify dimensional variation and design conformance.",
      },
      {
        q: "Do you support CAD inspection in Hyderabad?",
        a: "Yes. Yetki Engineering provides CAD inspection support for Hyderabad manufacturing, tooling and product development teams.",
      },
      {
        q: "Can CAD inspection help with mould correction?",
        a: "Yes. Comparison data can help identify where tooling or process corrections may be needed.",
      },
    ],
    related: [
      { to: "/cad-inspection-services-india", label: "CAD Inspection India" },
      { to: "/3d-scanning-services-hyderabad", label: "3D Scanning Hyderabad" },
      { to: "/reverse-engineering-services-hyderabad", label: "Reverse Engineering Hyderabad" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/3d-printing-services-hyderabad",
    title: "3D Printing Services Hyderabad | Yetki Engineering",
    metaDescription:
      "3D printing services in Hyderabad for prototypes, fitment models, engineering validation and product development support.",
    eyebrow: "3D printing Hyderabad",
    h1: "3D Printing Services in Hyderabad",
    intro:
      "Yetki Engineering supports 3D printing services in Hyderabad for product development, prototype validation, fitment checks and engineering iteration.",
    serviceType: "3D Printing",
    areaServed: "Hyderabad, Telangana, India",
    overview: [
      "3D printing helps engineering teams validate shape, fit, ergonomics and assembly direction before moving into tooling or production. It is most useful when paired with CAD modelling, reverse engineering and product development support.",
      "Our Hyderabad 3D printing support focuses on engineering use cases such as concept models, prototype housings, fixture ideas, assembly checks and design reviews. We help teams prepare data, review print suitability and use the printed output to make better design decisions.",
      "For industrial clients, the value is not only the printed part. It is the faster design loop between CAD, physical review, corrections and production planning.",
    ],
    applications: [
      "Prototype models for design review",
      "Fitment and assembly validation",
      "Product development iteration",
      "Reverse engineered part verification",
      "Tooling and fixture concept models",
      "Customer presentation models",
    ],
    industries,
    process: [
      "Review CAD data, part purpose, size and functional expectations.",
      "Check print orientation, wall thickness, feature risks and finishing needs.",
      "Prepare or modify geometry where required for printable output.",
      "Print prototype or model according to agreed scope.",
      "Review fit, form and design changes before the next engineering step.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "Prototype printing support",
      "CAD preparation for printability",
      "Fitment model development",
      "Product design iteration support",
      "Reverse engineering validation models",
      "Engineering review before mould or CNC investment",
    ],
    faqs: [
      {
        q: "Do you offer 3D printing services in Hyderabad?",
        a: "Yes. We support engineering-focused 3D printing for prototypes, validation models and product development workflows.",
      },
      {
        q: "Can you help prepare CAD files for printing?",
        a: "Yes. We can review CAD data and help prepare geometry for prototype printing where required.",
      },
      {
        q: "Is 3D printing suitable before mould making?",
        a: "Yes. Printed models can help validate form, fit and assembly before investing in tooling.",
      },
    ],
    related: [
      { to: "/product-development-services-hyderabad", label: "Product Development Hyderabad" },
      { to: "/cad-modelling-services", label: "CAD Modelling" },
      { to: "/precision-mould-making-hyderabad", label: "Precision Mould Making Hyderabad" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/product-development-services-hyderabad",
    title: "Product Development Hyderabad | Yetki Engineering",
    metaDescription:
      "Product development services in Hyderabad for CAD design, prototyping, reverse engineering, mould planning and manufacturing support.",
    eyebrow: "Product development Hyderabad",
    h1: "Product Development Services in Hyderabad",
    intro:
      "Yetki Engineering supports product development services in Hyderabad for teams moving from concept, sample or prototype toward manufacturable engineering data.",
    serviceType: "Product Development",
    areaServed: "Hyderabad, Telangana, India",
    overview: [
      "Industrial product development requires more than a visual model. Teams need CAD geometry, part architecture, material and process thinking, prototype validation, tooling awareness and manufacturability review.",
      "Our Hyderabad product development support connects mechanical design engineering, CAD modelling, reverse engineering, 3D scanning, 3D printing support, mould planning and precision manufacturing inputs. This helps reduce rework between design, prototype and production.",
      "The workflow is useful for plastic products, industrial components, enclosures, fixtures, replacement parts, product improvements and engineering concepts that need a practical path toward manufacturing.",
    ],
    applications: [
      "New product concept engineering",
      "Plastic and mechanical component development",
      "Prototype-to-production transition",
      "Product redesign and improvement",
      "CAD modelling for manufacturable parts",
      "Mould and manufacturing planning",
    ],
    industries,
    process: [
      "Capture requirements, operating context, constraints and expected manufacturing route.",
      "Develop CAD concepts, part structure and engineering options.",
      "Review fit, assembly, wall thickness, strength and manufacturability.",
      "Support prototype creation, scanning, inspection or iteration where needed.",
      "Prepare production-oriented CAD, documentation or handoff inputs.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "Mechanical design engineering",
      "CAD modelling and design iteration",
      "Prototype support",
      "Manufacturing feasibility review",
      "Mould design awareness",
      "Reverse engineering for product improvement",
    ],
    faqs: [
      {
        q: "Do you provide product development services in Hyderabad?",
        a: "Yes. We support product development from CAD and prototyping through manufacturing-oriented engineering review.",
      },
      {
        q: "Can you work from an existing sample?",
        a: "Yes. Existing samples can be scanned, measured or reverse engineered to support redesign or new product development.",
      },
      {
        q: "Do you support manufacturing after design?",
        a: "Yes. We can support manufacturing planning and precision manufacturing workflows depending on project requirements.",
      },
    ],
    related: [
      { to: "/product-development-company-india", label: "Product Development India" },
      { to: "/3d-printing-services-hyderabad", label: "3D Printing Hyderabad" },
      { to: "/precision-mould-making-hyderabad", label: "Precision Mould Making Hyderabad" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/industrial-metrology-services-hyderabad",
    title: "Industrial Metrology Hyderabad | Yetki Engineering",
    metaDescription:
      "Industrial metrology services in Hyderabad for dimensional review, scan data, CAD comparison and manufacturing quality support.",
    eyebrow: "Industrial metrology Hyderabad",
    h1: "Industrial Metrology Services in Hyderabad",
    intro:
      "Yetki Engineering supports industrial metrology services in Hyderabad for teams that need reliable dimensional insight for parts, tools and assemblies.",
    serviceType: "Industrial Metrology",
    areaServed: "Hyderabad, Telangana, India",
    overview: [
      "Industrial metrology gives engineering and manufacturing teams the measurement evidence needed to make decisions. It can support quality review, tooling correction, part validation, reverse engineering and supplier discussions.",
      "Our metrology-related support combines 3D scanning, CAD comparison, dimensional review and engineering interpretation. This is especially helpful for complex surfaces, tooling features, prototypes and parts where conventional measurement alone is slow or incomplete.",
      "For Hyderabad manufacturers, industrial metrology can reduce uncertainty during product launches, production troubleshooting, tool trials and reverse engineering projects.",
    ],
    applications: [
      "Dimensional validation of components",
      "Tooling and mould review",
      "Prototype inspection support",
      "Scan-based measurement workflows",
      "CAD comparison and deviation review",
      "Manufacturing quality investigation",
    ],
    industries,
    process: [
      "Define measurement objectives, critical features and deliverable format.",
      "Capture measurement or scan data using suitable methods.",
      "Align data to CAD, datums or project references.",
      "Review deviations, feature positions and engineering impact.",
      "Prepare results for design, quality or manufacturing decisions.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "Scan-based dimensional review",
      "CAD comparison support",
      "Metrology inputs for reverse engineering",
      "Prototype and production part review",
      "Tooling feedback support",
      "Engineering interpretation of measurement outcomes",
    ],
    faqs: [
      {
        q: "What industrial metrology services do you support?",
        a: "We support scan-based dimensional review, CAD comparison, tooling review and measurement-led engineering workflows.",
      },
      {
        q: "Can metrology help troubleshoot production issues?",
        a: "Yes. Measurement data can help identify geometry variation, tool issues and part deviations that affect production or assembly.",
      },
      {
        q: "Do you serve Hyderabad industrial clients?",
        a: "Yes. Yetki Engineering supports Hyderabad manufacturers and engineering teams with metrology-related services.",
      },
    ],
    related: [
      { to: "/industrial-metrology-services-india", label: "Industrial Metrology India" },
      { to: "/cad-inspection-services-hyderabad", label: "CAD Inspection Hyderabad" },
      { to: "/3d-scanning-services-hyderabad", label: "3D Scanning Hyderabad" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/precision-mould-making-hyderabad",
    title: "Precision Mould Making Hyderabad | Yetki Engineering",
    metaDescription:
      "Precision mould making in Hyderabad for plastic components, tooling development, CAD review and manufacturing support.",
    eyebrow: "Precision mould making",
    h1: "Precision Mould Making in Hyderabad",
    intro:
      "Yetki Engineering supports precision mould making in Hyderabad with CAD-aware tooling input, product review and manufacturing-focused engineering support.",
    serviceType: "Precision Mould Making",
    areaServed: "Hyderabad, Telangana, India",
    overview: [
      "Mould making requires careful coordination between product design, tooling strategy, material behaviour, shrinkage expectations, parting decisions and manufacturing constraints. Early engineering review can prevent expensive tool changes later.",
      "Our precision mould making support connects CAD modelling, product development, reverse engineering, inspection and manufacturing knowledge. We help clients review part geometry, identify tooling risks and move toward production-ready mould decisions.",
      "Hyderabad product teams use this support for plastic housings, consumer components, industrial parts, enclosures, covers, functional prototypes and components that need repeatable production.",
    ],
    applications: [
      "Injection mould development support",
      "Plastic part manufacturability review",
      "Tooling data preparation",
      "Mould correction feedback",
      "Prototype-to-tooling transition",
      "Reverse engineered plastic part tooling",
    ],
    industries,
    process: [
      "Review product CAD, sample part or reverse engineering input.",
      "Evaluate wall thickness, draft, ribs, bosses, parting direction and tooling risks.",
      "Support mould design planning and manufacturing data preparation.",
      "Coordinate inspection or CAD comparison inputs where needed.",
      "Support correction and iteration based on trial or production feedback.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "Mould design support",
      "Plastic part CAD review",
      "Tooling feasibility input",
      "Reverse engineering for moulded parts",
      "Inspection support for mould corrections",
      "Precision manufacturing coordination",
    ],
    faqs: [
      {
        q: "Do you support precision mould making in Hyderabad?",
        a: "Yes. We support mould making and tooling development workflows for Hyderabad product and manufacturing teams.",
      },
      {
        q: "Can you review plastic part CAD before tooling?",
        a: "Yes. CAD review can identify wall thickness, draft and tooling concerns before mould investment.",
      },
      {
        q: "Do you support mould correction?",
        a: "Yes. Scanning, CAD comparison and engineering review can support mould correction decisions.",
      },
    ],
    related: [
      { to: "/mould-design-manufacturing", label: "Mould Design Service" },
      { to: "/product-development-services-hyderabad", label: "Product Development Hyderabad" },
      { to: "/precision-engineering-company-india", label: "Precision Engineering India" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/cnc-manufacturing-services-hyderabad",
    title: "CNC Manufacturing Hyderabad | Yetki Engineering",
    metaDescription:
      "CNC manufacturing services in Hyderabad for precision components, prototypes, tooling parts and engineering production support.",
    eyebrow: "CNC manufacturing Hyderabad",
    h1: "CNC Manufacturing Services in Hyderabad",
    intro:
      "Yetki Engineering supports CNC manufacturing services in Hyderabad for precision components, prototypes, tooling parts and engineering production requirements.",
    serviceType: "CNC Manufacturing",
    areaServed: "Hyderabad, Telangana, India",
    overview: [
      "CNC manufacturing is often the bridge between engineering data and functional hardware. It requires accurate CAD, process planning, material awareness, tolerance review and inspection support to produce reliable components.",
      "Our CNC manufacturing support is connected to CAD modelling, reverse engineering, product development and precision inspection workflows. This helps teams move from sample, scan or design into manufacturable components with fewer handoff gaps.",
      "Hyderabad industrial clients may use CNC support for prototypes, replacement parts, tooling inserts, fixtures, machine components, product development builds and low-volume precision parts.",
    ],
    applications: [
      "Prototype machining",
      "Precision component manufacturing",
      "Tooling inserts and fixture parts",
      "Reverse engineered part production",
      "Product development hardware",
      "Low-volume engineering batches",
    ],
    industries,
    process: [
      "Review CAD, drawings, material needs, tolerances and part function.",
      "Assess manufacturability and identify critical machining features.",
      "Plan production approach, inspection needs and delivery expectations.",
      "Manufacture components according to agreed scope.",
      "Support dimensional review and iteration where required.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "CAD-to-manufacturing support",
      "Prototype and low-volume component production",
      "Fixture and tooling part support",
      "Reverse engineered component manufacturing",
      "Dimensional review coordination",
      "Manufacturing feasibility input",
    ],
    faqs: [
      {
        q: "Do you provide CNC manufacturing services in Hyderabad?",
        a: "Yes. We support CNC manufacturing requirements for precision parts, prototypes and tooling-related components.",
      },
      {
        q: "Can CNC manufacturing use reverse engineered CAD?",
        a: "Yes. Reverse engineered CAD can be prepared for manufacturing when accuracy, tolerances and process needs are reviewed.",
      },
      {
        q: "Do you handle low-volume precision components?",
        a: "Yes. We can support prototype and low-volume engineering batches based on project scope.",
      },
    ],
    related: [
      { to: "/precision-manufacturing", label: "Precision Manufacturing" },
      { to: "/precision-engineering-company-india", label: "Precision Engineering India" },
      { to: "/cad-inspection-services-hyderabad", label: "CAD Inspection Hyderabad" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/3d-scanning-services-india",
    title: "3D Scanning Services India | Yetki Engineering",
    metaDescription:
      "Industrial 3D scanning services in India for reverse engineering, CAD inspection, product development and manufacturing support.",
    eyebrow: "India 3D scanning",
    h1: "3D Scanning Services in India",
    intro:
      "Yetki Engineering provides industrial 3D scanning services in India for manufacturers and engineering teams that need accurate digital geometry for parts, tools and prototypes.",
    serviceType: "3D Scanning",
    areaServed: "India",
    overview: [
      "India-wide engineering teams use 3D scanning when physical components must be captured for reverse engineering, inspection, redesign, tool correction or product development. The process reduces dependence on manual measurement for complex surfaces and undocumented parts.",
      "From our Hyderabad base, Yetki Engineering supports clients across India with a workflow that connects scan data to practical engineering deliverables. We focus on clean data, useful file formats and downstream compatibility with CAD, inspection and manufacturing needs.",
      "This service is suitable for automotive, aerospace, tooling, medical device, defence, oil and gas, consumer product and general manufacturing requirements where geometry accuracy matters.",
    ],
    applications: [
      "Industrial 3D scanning for India-based manufacturers",
      "Reverse engineering support",
      "CAD inspection and comparison",
      "Prototype and product development scanning",
      "Tooling and mould geometry capture",
      "Production component documentation",
    ],
    industries,
    process: [
      "Review project location, component details, deliverables and timeline.",
      "Plan in-lab or feasible on-site scanning support.",
      "Capture geometry and process scan data for clean digital output.",
      "Prepare mesh, CAD reference or inspection-ready deliverables.",
      "Support downstream reverse engineering, CAD or manufacturing use.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "Industrial scanning workflows",
      "Mesh and point cloud data",
      "Scan-to-CAD support",
      "Inspection data preparation",
      "India-wide project coordination",
      "Hyderabad engineering base",
    ],
    faqs: [
      {
        q: "Do you provide 3D scanning services across India?",
        a: "Yes. Yetki Engineering supports India-wide scanning requirements from its Hyderabad engineering base.",
      },
      {
        q: "Which industries use industrial 3D scanning?",
        a: "Automotive, aerospace, manufacturing, medical devices, tooling, defence, oil and gas and consumer product teams use 3D scanning.",
      },
      {
        q: "Can scan data support reverse engineering?",
        a: "Yes. Scan data is often the foundation for CAD reconstruction and reverse engineering.",
      },
    ],
    related: [
      { to: "/3d-scanning-services-hyderabad", label: "3D Scanning Hyderabad" },
      { to: "/reverse-engineering-company-india", label: "Reverse Engineering India" },
      { to: "/cad-inspection-services-india", label: "CAD Inspection India" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/reverse-engineering-company-india",
    title: "Reverse Engineering Company India | Yetki Engineering",
    metaDescription:
      "Reverse engineering company in India for CAD reconstruction, 3D scanning, legacy parts, redesign and manufacturing support.",
    eyebrow: "Reverse engineering India",
    h1: "Reverse Engineering Company in India",
    intro:
      "Yetki Engineering supports reverse engineering projects across India for teams that need CAD data, part documentation and manufacturable models from physical components.",
    serviceType: "Reverse Engineering",
    areaServed: "India",
    overview: [
      "A reverse engineering company in India must understand both geometry capture and manufacturing intent. Physical parts often include wear, process variation, unclear datums and missing design history. The engineering task is to rebuild useful data, not simply copy every surface blindly.",
      "Yetki Engineering combines 3D scanning, CAD reconstruction, dimensional review and manufacturing awareness to support legacy part replacement, product redesign, tool correction and documentation projects.",
      "Our Hyderabad base allows us to support India-wide industrial clients that need practical reverse engineering for automotive, aerospace, medical device, tooling, defence, oil and gas and consumer product applications.",
    ],
    applications: [
      "Legacy component CAD reconstruction",
      "Obsolete spare part development",
      "Product redesign from physical samples",
      "Manufacturing drawing support",
      "Tooling and fixture reverse engineering",
      "Assembly and fitment investigation",
    ],
    industries,
    process: [
      "Review component function, material, assembly context and required outputs.",
      "Capture part geometry through scanning and measurement.",
      "Rebuild CAD with design intent where appropriate.",
      "Review critical features, fit surfaces and manufacturability.",
      "Deliver CAD, drawings or production references according to scope.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "Physical sample to CAD",
      "Scan-to-CAD reconstruction",
      "Parametric and surface modelling",
      "Manufacturing-aware redesign",
      "Legacy part documentation",
      "India-wide project support",
    ],
    faqs: [
      {
        q: "Is Yetki Engineering a reverse engineering company in India?",
        a: "Yes. We support reverse engineering projects for Indian manufacturers and product teams from our Hyderabad base.",
      },
      {
        q: "Can you reverse engineer a part without drawings?",
        a: "Yes. We can use scanning, measurement and CAD reconstruction to create usable engineering data from physical samples.",
      },
      {
        q: "What files can reverse engineering produce?",
        a: "Depending on scope, outputs can include CAD models, surface data, STL references, drawings and manufacturing inputs.",
      },
    ],
    related: [
      { to: "/reverse-engineering-services-hyderabad", label: "Reverse Engineering Hyderabad" },
      { to: "/3d-scanning-services-india", label: "3D Scanning India" },
      { to: "/product-development-company-india", label: "Product Development India" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/cad-inspection-services-india",
    title: "CAD Inspection Services India | Yetki Engineering",
    metaDescription:
      "CAD inspection services in India for scan-to-CAD comparison, dimensional validation, prototype review and tooling correction.",
    eyebrow: "CAD inspection India",
    h1: "CAD Inspection Services in India",
    intro:
      "Yetki Engineering provides CAD inspection support in India for manufacturers that need dimensional comparison between physical parts and design data.",
    serviceType: "CAD Inspection",
    areaServed: "India",
    overview: [
      "CAD inspection gives engineering teams a structured way to compare the manufactured or scanned condition of a part against its intended CAD model. It is valuable during prototype validation, supplier review, tooling correction and production troubleshooting.",
      "Yetki Engineering supports scan-based comparison, measurement review and engineering interpretation from Hyderabad for India-wide clients. The focus is on actionable information for design, quality and manufacturing teams.",
      "The service is especially relevant for free-form parts, plastic components, sheet metal forms, tooling features, machined parts and assemblies where visual deviation data can accelerate decisions.",
    ],
    applications: [
      "India-wide CAD comparison support",
      "Prototype validation",
      "Tooling correction feedback",
      "Production sample review",
      "Supplier quality discussion",
      "Reverse engineering verification",
    ],
    industries,
    process: [
      "Confirm CAD model, physical part, tolerance objectives and report needs.",
      "Capture scan or measurement data from the sample.",
      "Align measured data to CAD using agreed references.",
      "Review deviations and critical feature variation.",
      "Prepare inspection outputs for engineering decisions.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "Scan-to-CAD comparison",
      "Deviation review support",
      "Dimensional inspection inputs",
      "Tool and mould correction support",
      "Prototype validation workflows",
      "India-wide project support",
    ],
    faqs: [
      {
        q: "Do you provide CAD inspection services in India?",
        a: "Yes. We support India-wide CAD inspection and scan comparison projects from Hyderabad.",
      },
      {
        q: "Can CAD inspection show part deviations?",
        a: "Yes. CAD comparison can identify where a physical part differs from the design model.",
      },
      {
        q: "Is CAD inspection useful for prototypes?",
        a: "Yes. Prototype inspection helps detect design or manufacturing issues before production tooling or scale-up.",
      },
    ],
    related: [
      { to: "/cad-inspection-services-hyderabad", label: "CAD Inspection Hyderabad" },
      { to: "/3d-scanning-services-india", label: "3D Scanning India" },
      { to: "/industrial-metrology-services-india", label: "Industrial Metrology India" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/product-development-company-india",
    title: "Product Development Company India | Yetki Engineering",
    metaDescription:
      "Product development company in India for mechanical design, CAD modelling, prototyping, reverse engineering and manufacturing support.",
    eyebrow: "Product development India",
    h1: "Product Development Company in India",
    intro:
      "Yetki Engineering supports product development projects in India with mechanical design engineering, CAD modelling, prototyping input and manufacturing-aware review.",
    serviceType: "Product Development",
    areaServed: "India",
    overview: [
      "A product development company in India must help clients move from idea, sample or prototype to practical engineering data. The work often includes CAD modelling, reverse engineering, material and process consideration, prototype review and manufacturing planning.",
      "Yetki Engineering supports this journey through mechanical design engineering, 3D scanning, CAD modelling, 3D printing support, mould making awareness and precision manufacturing input. The process is designed to reduce gaps between design and production.",
      "India-wide teams can use this service for industrial components, plastic products, machine parts, fixtures, consumer product enclosures and engineering improvements to existing products.",
    ],
    applications: [
      "New product engineering",
      "Mechanical design development",
      "Prototype validation",
      "CAD modelling for production",
      "Reverse engineering-led redesign",
      "Manufacturing planning support",
    ],
    industries,
    process: [
      "Define product requirements, constraints, functional needs and target process.",
      "Develop CAD concepts and engineering options.",
      "Review manufacturability, assembly and prototype needs.",
      "Support iteration using scanning, printing, inspection or sample feedback.",
      "Prepare data for tooling, CNC, mould making or production discussion.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "Mechanical design engineering",
      "CAD product modelling",
      "Prototype support",
      "Design for manufacturing review",
      "Reverse engineering integration",
      "India-wide industrial product support",
    ],
    faqs: [
      {
        q: "Does Yetki Engineering support product development in India?",
        a: "Yes. We support product development and mechanical design workflows for clients across India.",
      },
      {
        q: "Can you help from sample to CAD?",
        a: "Yes. Existing samples can be scanned or measured and converted into CAD for redesign or development.",
      },
      {
        q: "Do you support manufacturing planning?",
        a: "Yes. We consider manufacturing feasibility, mould planning and precision production needs during development.",
      },
    ],
    related: [
      { to: "/product-development-services-hyderabad", label: "Product Development Hyderabad" },
      { to: "/precision-engineering-company-india", label: "Precision Engineering India" },
      { to: "/reverse-engineering-company-india", label: "Reverse Engineering India" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/industrial-metrology-services-india",
    title: "Industrial Metrology Services India | Yetki Engineering",
    metaDescription:
      "Industrial metrology services in India for dimensional review, CAD comparison, scan data and manufacturing quality support.",
    eyebrow: "Industrial metrology India",
    h1: "Industrial Metrology Services in India",
    intro:
      "Yetki Engineering supports industrial metrology services in India for dimensional review, CAD comparison and measurement-led engineering decisions.",
    serviceType: "Industrial Metrology",
    areaServed: "India",
    overview: [
      "Industrial metrology supports decisions in design, quality, tooling and production. When a component does not fit, a prototype varies from CAD or a tool needs correction, measurement data helps teams move from opinion to evidence.",
      "Yetki Engineering provides metrology-related support using scan data, CAD comparison and engineering review. Our Hyderabad team supports India-wide manufacturers with practical measurement workflows for parts, tools, prototypes and assemblies.",
      "The service is relevant for automotive, aerospace, tooling, medical devices, defence, oil and gas, consumer products and general manufacturing teams that need reliable dimensional insight.",
    ],
    applications: [
      "Dimensional review across India",
      "CAD comparison and deviation analysis",
      "Prototype and production sample validation",
      "Tooling and mould correction support",
      "Reverse engineering measurement inputs",
      "Manufacturing quality investigation",
    ],
    industries,
    process: [
      "Understand the measurement objective and critical features.",
      "Capture scan or dimensional data using suitable methods.",
      "Compare results against CAD, datums or project references.",
      "Review engineering impact of deviations.",
      "Prepare findings for design, quality or manufacturing action.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "Scan-based metrology support",
      "Dimensional comparison workflows",
      "CAD inspection inputs",
      "Tooling review",
      "Prototype validation",
      "India-wide engineering support",
    ],
    faqs: [
      {
        q: "Do you provide industrial metrology services in India?",
        a: "Yes. Yetki Engineering supports industrial metrology and dimensional review projects across India.",
      },
      {
        q: "Can metrology support quality teams?",
        a: "Yes. Measurement data can help quality teams understand variation, supplier issues and part conformance.",
      },
      {
        q: "Is metrology useful for reverse engineering?",
        a: "Yes. Accurate measurement is a key input for reverse engineering and CAD reconstruction.",
      },
    ],
    related: [
      { to: "/industrial-metrology-services-hyderabad", label: "Industrial Metrology Hyderabad" },
      { to: "/cad-inspection-services-india", label: "CAD Inspection India" },
      { to: "/3d-scanning-services-india", label: "3D Scanning India" },
      ...relatedCore,
    ],
  }),
  page({
    path: "/precision-engineering-company-india",
    title: "Precision Engineering Company India | Yetki Engineering",
    metaDescription:
      "Precision engineering company in India for 3D scanning, reverse engineering, CAD design, mould making and CNC manufacturing support.",
    eyebrow: "Precision engineering India",
    h1: "Precision Engineering Company in India",
    intro:
      "Yetki Engineering is a precision engineering company in India supporting 3D scanning, reverse engineering, CAD modelling, mould making and manufacturing workflows.",
    serviceType: "Precision Engineering",
    areaServed: "India",
    overview: [
      "Precision engineering connects design, measurement and manufacturing. Teams need accurate geometry, practical CAD, inspection thinking and process awareness to produce reliable components and tooling.",
      "Yetki Engineering supports India-wide clients from Hyderabad with services across 3D scanning, reverse engineering, CAD inspection, product development, precision mould making, 3D printing support, industrial metrology, CNC manufacturing and mechanical design engineering.",
      "This integrated approach is useful when a project starts from a physical sample, an incomplete drawing, a prototype, a tooling problem or a production requirement that needs disciplined engineering support.",
    ],
    applications: [
      "Precision component development",
      "Reverse engineering and CAD reconstruction",
      "Industrial 3D scanning",
      "CAD inspection and metrology",
      "Mould making and tooling support",
      "CNC manufacturing coordination",
    ],
    industries,
    process: [
      "Review technical requirement, project goal and available input data.",
      "Select the right path: scan, CAD, inspection, prototype, mould or manufacturing.",
      "Develop engineering outputs with manufacturing and validation needs in mind.",
      "Review critical dimensions, fit, materials and production constraints.",
      "Support the project through documentation, iteration or manufacturing handoff.",
    ],
    whyChoose: baseWhyChoose,
    capabilities: [
      "3D scanning and reverse engineering",
      "CAD design and inspection support",
      "Product development workflows",
      "Precision mould making support",
      "CNC manufacturing support",
      "Industrial metrology inputs",
    ],
    faqs: [
      {
        q: "Is Yetki Engineering a precision engineering company in India?",
        a: "Yes. Yetki Engineering supports precision engineering services for Indian industrial clients from Hyderabad.",
      },
      {
        q: "Which services are included in precision engineering?",
        a: "Services include 3D scanning, reverse engineering, CAD modelling, inspection, mould making, CNC manufacturing and product development support.",
      },
      {
        q: "Do you support both Hyderabad and India-wide projects?",
        a: "Yes. We support local Hyderabad projects and coordinate with industrial clients across India.",
      },
    ],
    related: [
      { to: "/product-development-company-india", label: "Product Development India" },
      { to: "/cnc-manufacturing-services-hyderabad", label: "CNC Manufacturing Hyderabad" },
      { to: "/precision-mould-making-hyderabad", label: "Precision Mould Making Hyderabad" },
      ...relatedCore,
    ],
  }),
] satisfies SeoLandingPage[];

export const seoLandingPageByPath = Object.fromEntries(
  seoLandingPages.map((landingPage) => [landingPage.path, landingPage]),
) as Record<string, SeoLandingPage>;
