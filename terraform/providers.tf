provider "google" {
  version     = "~> 3.16.0"
  credentials = var.credentials
  project     = var.project_id
  region      = var.region
}

provider "google-beta" {
  version     = "~> 2.1"
  credentials = var.credentials
  project     = var.project_id
  region      = var.region
}