<section id="certificates">

    <div class="container">

        <!-- TITLE -->

        <div class="text-center mb-5">

            <span class="section-badge">
                Certifications
            </span>

            <h2 class="section-title">
                My Certifications
            </h2>

            <p class="section-subtitle">
                Professional certifications in
                Web Development, Data Analytics,
                Cybersecurity and Information Technology.
            </p>

        </div>

        <!-- FILTER -->

        <div class="certificate-filter mb-4">

            <button class="certificate-btn active" data-filter="all">
                All
            </button>

            <button class="certificate-btn" data-filter="programming">
                Programming
            </button>

            <button class="certificate-btn" data-filter="analytics">
                Data Analytics
            </button>

            <button class="certificate-btn" data-filter="cyber">
                Cybersecurity
            </button>

        </div>

        <!-- SEARCH -->

        <div class="row justify-content-center mb-4">

            <div class="col-lg-5">

                <div class="project-search">

                    <i class="bi bi-search"></i>

                    <input
                        type="text"
                        id="certificateSearch"
                        class="form-control"
                        placeholder="Search Certificate">

                </div>

            </div>

        </div>

        <!-- COUNTER -->

        <div class="text-center mb-5">

            <h6 id="certificateCounter">

                Showing 6 of 6 Certificates

            </h6>

        </div>

        <!-- CERTIFICATE ROW -->

        <div class="row g-4">

            <div class="col-lg-4 col-md-6 certificate-item" data-category="programming">

                <div class="certificate-card">

                    <img src="assets/images/certificates/fullstack.jpg"
                        class="certificate-image">

                    <div class="certificate-body">

                        <small>Programming</small>

                        <h4>Full Stack Web Development</h4>

                        <p>Coursera</p>

                        <button
                            class="btn btn-primary view-certificate"
                            data-bs-toggle="modal"
                            data-bs-target="#certificateModal"
                            data-title="Full Stack Web Development"
                            data-image="assets/images/certificates/fullstack.jpg"
                            data-issuer="Coursera"
                            data-date="Issued June 2026"
                            data-verify="#">

                            View Certificate

                        </button>

                    </div>

                </div>

            </div>

            <div class="col-lg-4 col-md-6 certificate-item" data-category="analytics">

                <div class="certificate-card">

                    <img src="assets/images/certificates/powerbi.jpg"
                        class="certificate-image">

                    <div class="certificate-body">

                        <small>Data Analytics</small>

                        <h4>Power BI Data Analyst</h4>

                        <p>Microsoft</p>

                        <button
                            class="btn btn-primary view-certificate"
                            data-bs-toggle="modal"
                            data-bs-target="#certificateModal"
                            data-title="Power BI Data Analyst"
                            data-image="assets/images/certificates/powerbi.jpg"
                            data-issuer="Microsoft"
                            data-date="Issued 2026"
                            data-verify="#">

                            View Certificate

                        </button>

                    </div>

                </div>

            </div>

            <div class="col-lg-4 col-md-6 certificate-item" data-category="programming">

                <div class="certificate-card">

                    <img src="assets/images/certificates/python.jpg"
                        class="certificate-image">

                    <div class="certificate-body">

                        <small>Programming</small>

                        <h4>Python Programming</h4>

                        <p>Coursera</p>

                        <button class="btn btn-primary view-certificate"
                            data-bs-toggle="modal"
                            data-bs-target="#certificateModal"
                            data-title="Python Programming"
                            data-image="assets/images/certificates/python.jpg"
                            data-issuer="Coursera"
                            data-date="Issued 2026"
                            data-verify="#">

                            View Certificate

                        </button>

                    </div>

                </div>

            </div>

            <div class="col-lg-4 col-md-6 certificate-item" data-category="cyber">

                <div class="certificate-card">

                    <img src="assets/images/certificates/cybersecurity.jpg"
                        class="certificate-image">

                    <div class="certificate-body">

                        <small>Cybersecurity</small>

                        <h4>Cybersecurity Essentials</h4>

                        <p>Cisco</p>

                        <button class="btn btn-primary view-certificate"
                            data-bs-toggle="modal"
                            data-bs-target="#certificateModal"
                            data-title="Cybersecurity Essentials"
                            data-image="assets/images/certificates/cybersecurity.jpg"
                            data-issuer="Cisco"
                            data-date="Issued 2026"
                            data-verify="#">

                            View Certificate

                        </button>

                    </div>

                </div>

            </div>

            <div class="col-lg-4 col-md-6 certificate-item" data-category="analytics">

                <div class="certificate-card">

                    <img src="assets/images/certificates/engineering.jpg"
                        class="certificate-image">

                    <div class="certificate-body">

                        <small>Data Analytics</small>

                        <h4>Engineering Data Analytics</h4>

                        <p>Google</p>

                        <button class="btn btn-primary view-certificate"
                            data-bs-toggle="modal"
                            data-bs-target="#certificateModal"
                            data-title="Engineering Data Analytics"
                            data-image="assets/images/certificates/engineering.jpg"
                            data-issuer="Google"
                            data-date="Issued 2026"
                            data-verify="#">

                            View Certificate

                        </button>

                    </div>

                </div>

            </div>
            <div class="col-lg-4 col-md-6 certificate-item" data-category="programming">

                <div class="certificate-card">

                    <img src="assets/images/certificates/sql.jpg"
                        class="certificate-image">

                    <div class="certificate-body">

                        <small>Programming</small>

                        <h4>SQL Database Essentials</h4>

                        <p>Oracle</p>

                        <button class="btn btn-primary view-certificate"
                            data-bs-toggle="modal"
                            data-bs-target="#certificateModal"
                            data-title="SQL Database Essentials"
                            data-image="assets/images/certificates/sql.jpg"
                            data-issuer="Oracle"
                            data-date="Issued 2026"
                            data-verify="#">

                            View Certificate

                        </button>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

<div class="modal fade" id="certificateModal" tabindex="-1">
    ...
</div>