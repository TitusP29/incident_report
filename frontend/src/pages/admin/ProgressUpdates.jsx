import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { axiosInstance } from "../../lib/axios";

import CaseHeader from "../../components/admin/CaseHeader";
import CaseTimeline from "../../components/admin/CaseTimeline";
import CaseUpdateForm from "../../components/admin/CaseUpdateForm";

export default function ProgressUpdates() {
  const { incidentId } = useParams();

  const [incident, setIncident] = useState(null);
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (incidentId) {
      loadCase();
    }
  }, [incidentId]);

  const loadCase = async () => {
    try {
      setLoading(true);

      const [incidentRes, updatesRes] = await Promise.all([
        axiosInstance.get(`/incidents/${incidentId}`),

        axiosInstance.get(
          `/case-updates/incident/${incidentId}`
        ),
      ]);

      setIncident(
        incidentRes.data.incident ||
        incidentRes.data
      );

      setUpdates(
        updatesRes.data.updates ||
        updatesRes.data ||
        []
      );
    } catch (error) {
      console.error(
        "Error loading case:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (data) => {
    try {
      setSubmitting(true);

      await axiosInstance.post(
        "/case-updates",
        {
          incidentId,
          ...data,
        }
      );

      await loadCase();
    } catch (error) {
      console.error(
        "Error submitting update:",
        error
      );

      alert(
        error.response?.data?.message ||
        "Failed to submit update"
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!incidentId) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-sm text-red-500">
          No incident ID was provided.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-sm text-slate-500">
          Loading case...
        </p>
      </div>
    );
  }

  if (!incident) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-sm text-red-500">
          Case not found.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-4">

      <CaseHeader
        caseNumber={
          incident.caseNumber ||
          incident._id
        }
        reportNumber={
          incident.reportNumber ||
          incident._id
        }
        status={
          incident.status ||
          "UNDER INVESTIGATION"
        }
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">

        <CaseTimeline
          updates={updates}
        />

        <CaseUpdateForm
          onSubmit={handleUpdate}
          loading={submitting}
        />

      </div>

    </div>
  );
}